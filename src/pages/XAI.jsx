import React from "react";

function XAI() {
  return (
    <div className="xai-page">
      <div className="xai-data">
        <div className="xai-data-row">
          <p>Define Trust Factors</p>
          <textarea className="xai-inputs" type="text" />
        </div>
        <div className="xai-data-row">
          <p>Configure Tools</p>
          <textarea className="xai-inputs" type="text" />
        </div>
        <div className="xai-data-row">
          <p>Reinforcement Feedback</p>
          <textarea className="xai-inputs" type="text" />
        </div>
      </div>
    </div>
  );
}

export default XAI;
