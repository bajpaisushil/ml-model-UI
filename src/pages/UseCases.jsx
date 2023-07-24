import React, { useState } from "react";
import Papa from "papaparse";

function UseCases() {
  const [csvData, setCsvData] = useState([]);
  const [headers, setHeaders] = useState([]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    Papa.parse(file, {
      header: true,
      complete: (results) => {
        // Extract headers and data from parsed CSV
        setHeaders(results.meta.fields);
        setCsvData(results.data);
      },
    });
  };
  return (
    <div className="use-cases-page">
      <div>
        <img src={require("../icons/useCase.png")} alt="usecases" height={200} width={1000} />
      </div>
      <div>
        <input type="file" accept=".csv" onChange={handleFileChange} />
        {csvData.length > 0 && (
          <div className="use-cases-csv-parse">
            <table>
              <thead>
                <tr>
                  {headers.map((header, index) => (
                    <th key={index}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {csvData.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {headers.map((header, colIndex) => (
                      <td key={colIndex}>{row[header]}</td>
                    ))}
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
