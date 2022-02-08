import React from 'react';
/* import './FeedbackOptions.css'; */

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    <button type="button" onClick={onLeaveFeedback}>
      Good
    </button>
    <button type="button" onClick={onLeaveFeedback}>
      Neutral
    </button>
    <button type="button" onClick={onLeaveFeedback}>
      Bad
    </button>
  </>
);

export default FeedbackOptions;
