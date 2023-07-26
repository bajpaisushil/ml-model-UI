import React, { useState } from "react";

function Method() {
  const [completeness, setCompleteness] = useState("");
  const [quality, setQuality] = useState("");
  const [transformation, setTransformation] = useState("");
  const [display, setDisplay]=useState(false);

  const handleOutput=()=>{
    if(!completeness || !quality || !transformation){
      return alert("All Fields are required");
    }
    setDisplay((prev)=> !prev);
  }

  return (
    <div className="method-page">
      <div className="method-page-heading">
        Choosing the appropriate & most relevant ML Model and Method
      </div>
      <div className="methods-table-container">
        <div className="completeness-div">
          <label htmlFor="completeness" className="methods-label">
            Data Quality - Completeness :{" "}
          </label>
          <select
            id="completeness"
            value={completeness}
            onChange={(e) => setCompleteness(e.target.value)}
            className="methods-select"
            required
          >
            <option value="Choose">Choose</option>
            <option value="complete">Complete</option>
            <option value="deficient">Deficient</option>
            <option value="not sure">Not Sure</option>
          </select>
        </div>
        {console.log(completeness)}
        <div className="quality-div">
          <label htmlFor="quality" className="methods-label">
            Quality :{" "}
          </label>
          <select
            id="quality"
            value={quality}
            onChange={(e) => setQuality(e.target.value)}
            className="methods-select"
          >
            <option value="Choose">Choose</option>
            <option value="business aligned">Business Aligned</option>
            <option value="generic data">Generic Data</option>
            <option value="curated">Curated</option>
            <option value="not sure">Not Sure</option>
          </select>
        </div>
        {console.log(quality)}
        <div className="transformation-div">
          <label htmlFor="transformation" className="methods-label">
            Transformation :{" "}
          </label>
          <select
            id="transformation"
            value={transformation}
            onChange={(e) => setTransformation(e.target.value)}
            className="methods-select"
          >
            <option value="Choose">Choose</option>
            <option value="highly desired">Highly Desired</option>
            <option value="maybe">May be</option>
            <option value="not sure">Not Sure</option>
          </select>
        </div>
        {console.log(transformation)}

        <div className="outcome-div">
          <label htmlFor="outcome" className="methods-label">
            Outcome :
          </label>
          <div className="outcome-checkboxes">
            <input className="outcome-inputs" type="checkbox" id="visualization" name="visualization" value="visualization" />
            <label>Visualization</label>
            <input className="outcome-inputs" type="checkbox" id="scoring" name="scoring" value="scoring" />
            <label>Scoring</label>
            <input className="outcome-inputs" type="checkbox" id="predictions" name="predictions" value="predictions" />
            <label>Predictions</label>
          </div>
        </div>
        <div className="btn btn-primary suggest-btn my-3" onClick={handleOutput}>Suggest</div>
        {display && 
          <div className="methods-model-name">Best Model: Model Name</div>
        }
      </div>
    </div>
  );
}

export default Method;
