import React, { Component } from 'react';
import SectionTitle from './sectionTitle/SectionTitle';
import Statistics from './statistics/Statistics';
import FeedbackOptions from './feedbackOptions/FeedbackOptions';
import Notification from './notification/Notification';


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = event => {
    const option = event.target.name;
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };
  

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    const goodFeedback = this.state.good;
    let result = 0;

    if (totalFeedback > 0) {
      result = Math.ceil((goodFeedback / totalFeedback) * 100);
    }
    return result;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    return (
      <div>
        <SectionTitle title="Please leave feedback">
          <FeedbackOptions
            options = {['good', 'neutral', 'bad']}
            onLeaveFeedback = {this.onLeaveFeedback}
          />
        </SectionTitle>

        <SectionTitle title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              countTotalFeedback={this.countTotalFeedback()}
              countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message = 'There is no feedback'/>
          )}
        </SectionTitle>
      </div>
    );
  }
}

export default App;
