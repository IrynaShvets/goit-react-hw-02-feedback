import React, { Component } from 'react';
import './App.css';
import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const positive = ((good * 100) / total).toFixed(0);
    return ~~positive;
  };

  show = () => {
    this.setState({ visible: true });
  };

  render() {
    return (
      <div className="App">
        <h2>Please leave feedback</h2>
        {/* <button type="button" onClick={this.goodIncrement}>
          Good
        </button>
        <button type="button" onClick={this.neutralIncrement}>
          Neutral
        </button>
        <button type="button" onClick={this.badIncrement}>
          Bad
        </button>  options={} 
         */}
        <FeedbackOptions onLeaveFeedback={() => this.handleIncrement()} />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}

export default App;
