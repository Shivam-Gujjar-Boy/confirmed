import React from "react";
import PropTypes from "prop-types";
import "./cta.css";

const CTA = ({ heading1, content1, action1, onClick, className }) => {
  return (
    <div className={`thq-section-padding ${className}`}>
      <div className="thq-section-max-width">
        <div className="cta-accent2-bg">
          <div className="cta-accent1-bg">
            <div className="cta-container2">
              <div className="cta-content">
                <h2 className="thq-heading-2">{heading1}</h2>
                <p className="thq-body-large">{content1}</p>
              </div>
              <div className="cta-actions">
                <button
                  type="button"
                  className="thq-button-filled cta-button"
                  onClick={onClick}
                >
                  {action1}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CTA.defaultProps = {
  heading1: "Ready to join the future of airdrops?",
  content1:
    "Sign up now to get in on the action and earn rewards through our innovative algorithm.",
  action1: "Sign Up Now",
  onClick: () => alert("Button Clicked!"), // Default click action
  className: "",
};

CTA.propTypes = {
  heading1: PropTypes.string,
  content1: PropTypes.string,
  action1: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default CTA;
