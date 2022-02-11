import React from "react";

export default function AcademyBox() {
  return (
    <div className="accessbox">
      <p>No access</p>
      <p className="acp">Access</p>
      <div className="obox">
        <div className="accesstexts">
          <p>
            <del>Money Academy</del>{" "}
          </p>
          <p>Coach Academy</p>
          <p>Investment</p>
          <p>Real Estate</p>
          <p>Lifestyle Academy</p>
        </div>
        <div className="line"></div>
        <div className="noaccesstexts">
          <h4 className="accessp">Money Academy</h4>
        </div>
      </div>
      <div className="boxicons">
        <i className="bi bi-arrow-left arrowl"></i>
        <i className="bi bi-arrow-right arrowr"></i>
      </div>
    </div>
  );
}
