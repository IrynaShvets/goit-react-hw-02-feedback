import React from 'react';
import PropTypes from 'prop-types';
import { Button, Buttons } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <Buttons>
    {options.map(option => (
      <Button
        type="button"
        key={option}
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </Button>
    ))}
  </Buttons>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
