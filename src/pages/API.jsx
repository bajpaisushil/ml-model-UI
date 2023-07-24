import React from "react";

function API() {
  return (
    <div className="api-page">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>API Name</th>
            <th>Significant Feature</th>
            <th>Commom Data Format</th>
            <th>Customizable</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Data Connector API</th>
            <td><textarea  type="text" className="table-inputs" /> </td>
            <td><textarea  type="text" className="table-inputs" /> </td>
            <td><textarea  type="text" className="table-inputs" /> </td>
            <td><textarea  type="text" className="table-inputs" /> </td>
          </tr>
          <tr>
            <th>Salesforce API</th>
            <td><textarea  type="text" className="table-inputs" /> </td>
            <td><textarea  type="text" className="table-inputs" /> </td>
            <td><textarea  type="text" className="table-inputs" /> </td>
            <td><textarea  type="text" className="table-inputs" /> </td>
          </tr>
          <tr>
            <th>Oracle Commerce API</th>
            <td><textarea  type="text" className="table-inputs" /> </td>
            <td><textarea  type="text" className="table-inputs" /> </td>
            <td><textarea  type="text" className="table-inputs" /> </td>
            <td><textarea  type="text" className="table-inputs" /> </td>
          </tr>
          <tr>
            <th>Microsoft Commerce API</th>
            <td><textarea  type="text" className="table-inputs" /> </td>
            <td><textarea  type="text" className="table-inputs" /> </td>
            <td><textarea  type="text" className="table-inputs" /> </td>
            <td><textarea  type="text" className="table-inputs" /> </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default API;
