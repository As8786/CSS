import React from "react";
import "./second.css";

class Second extends React.Component {
  render() {
    return (
      <div className="second-conatiner">
        <div className="second-section">
          <i className="fas fa-edit hello" />
          <h6> CLEAN DESIGN </h6>
          <p>
            Professionally repurpose premium rather than magnetic bandwith.
          </p>
        </div>
        <div className="second-section">
          <i className="fas fa-gift" />
          <h6> PREMIUM RESOURCES </h6>
          <p>
            Professionally repurpose premium rather than magnetic bandwith.
          </p>
        </div>
        <div className="second-section">
          <i className="fas fa-laptop" />
          <h6> RESPONSIVE LAYOUT </h6>
          <p>
            Professionally repurpose premium rather than magnetic bandwith.
          </p>
        </div>
      </div>
    );
  }
}

export default Second;
