import { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notifacation';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  changeState = event => {
    const name = event.target.name;
    this.setState(prevstate => ({
      [name]: prevstate[name] + 1,
    }));
  };

  countAllFeedback = () => {
    return Object.values(this.state).reduce((total, value) => {
      return (total += value);
    }, 0);
  };

  countGoodFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.countAllFeedback());
  };

  render() {
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={this.state}
          onMakeFeedback={this.changeState}
        />
        {this.countAllFeedback() ? (
          <Statistics
            statistic={this.state}
            total={this.countAllFeedback()}
            percentage={this.countGoodFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    );
  }
}
