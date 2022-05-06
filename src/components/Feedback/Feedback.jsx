import React, { Component } from 'react';
import PropsType from 'prop-types';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import './Feedback.css';

class Feedback extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {
    good: PropsType.number.isRequired,
    neutral: PropsType.number.isRequired,
    bad: PropsType.number.isRequired,
    total: PropsType.number.isRequired,
    positivePercentage: PropsType.number.isRequired,
  };

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
    total: this.props.initialValue,
    positivePercentage: this.props.initialValue,
  };

  handleGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  handleNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  handleBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;

    const totalFeedback = () => {
      return good + neutral + bad;
    };

    const positivePercentage = () => {
      if (totalFeedback()) return Math.floor((good * 100) / totalFeedback());
      return 0;
    };

    return (
      <div className="Feedback">
        <h1>Please leave feedback</h1>
        <FeedbackOptions
          onGood={this.handleGood}
          onNeutral={this.handleNeutral}
          onBad={this.handleBad}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback()}
          positivePercentage={positivePercentage()}
        />
      </div>
    );
  }
}

export default Feedback;
