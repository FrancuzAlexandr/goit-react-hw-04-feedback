import { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notifacation';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countAllFeedback = () => {
    return good + neutral + bad;
  };

  const countGoodFeedbackPercentage = () => {
    return Math.round((good * 100) / countAllFeedback());
  };

  const onMakeFeedback = e => {
    const targetState = e.currentTarget.name;

    if (targetState === 'good') {
      setGood(state => state + 1);
    }
    if (targetState === 'neutral') {
      setNeutral(state => state + 1);
    }
    if (targetState === 'bad') {
      setBad(state => state + 1);
    }
  };

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions
        options={['good', 'neutral', 'bad']}
        onMakeFeedback={onMakeFeedback}
      />
      {countAllFeedback() ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countAllFeedback()}
          percentage={countGoodFeedbackPercentage()}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </Section>
  );
}
