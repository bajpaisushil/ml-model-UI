import React, { useState } from "react";
import Papa from "papaparse";


const calculateStatistics = (data) => {
  const numericColumns = {};
  const numericData = data.slice(1).map((row) =>
    Object.fromEntries(
      Object.entries(row).map(([key, value]) => [key, parseFloat(value)])
    )
  );

  Object.keys(numericData[0]).forEach((column) => {
    const columnData = numericData.map((row) => row[column]).filter((value) => !isNaN(value));
    const columnStats = {
      mean: 0,
      stdDev: 0,
      min: 0,
      max: 0,
    };

    columnStats.mean = columnData.reduce((sum, value) => sum + value, 0) / columnData.length;
    columnStats.stdDev = Math.sqrt(
      columnData.reduce((sum, value) => sum + (value - columnStats.mean) ** 2, 0) / columnData.length
    );
    columnStats.min = Math.min(...columnData);
    columnStats.max = Math.max(...columnData);

    numericColumns[column] = columnStats;
  });

  return numericColumns;
};

function UseCases() {
  const [file, setFile] = useState(null);
  const [data, setData] = useState(null);
  const [statistics, setStatistics] = useState(null);

  const handleDrop = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.name.endsWith(".csv")) {
      Papa.parse(selectedFile, {
        complete: (result) => {
          setData(result.data);
          setStatistics(calculateStatistics(result.data));
        },
        header: true,
      });
      setFile(selectedFile);
    } else {
      setFile(null);
      setData(null);
      setStatistics(null);
      alert("Please select a valid CSV file.");
    }
  };
  return (
    <div className="use-cases-page">
      <div>
        <img
          src={require("../icons/useCase.png")}
          alt="usecases"
          height={200}
          width={1000}
        />
      </div>
      <input type="file" accept=".csv" onChange={handleDrop} className="use-cases-input-1" />
      <div className="use-cases-csv">
        {data && (
          <div className="use-cases-sample-data">
            <h5>CSV Data</h5>
            <table>
              <thead>
                <tr>
                  {Object.keys(data[0]).map((column) => (
                    <th key={column}>{column}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr key={index}>
                    {Object.values(row).map((value, colIndex) => (
                      <td key={colIndex}>{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {statistics && (
          <div className="use-cases-data-analysis">
            <h5 style={{margin: '5px'}}>Representative Data Quality Deficiencies</h5>
            <table>
              <thead>
                <tr>
                  <th>Column</th>
                  <th>Mean</th>
                  <th>Standard Deviation</th>
                  <th>Min</th>
                  <th>Max</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(statistics).map(([column, stats]) => (
                  <tr key={column}>
                    <td>{column}</td>
                    <td>{stats.mean.toFixed(2)}</td>
                    <td>{stats.stdDev.toFixed(2)}</td>
                    <td>{stats.min.toFixed(2)}</td>
                    <td>{stats.max.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default UseCases;
