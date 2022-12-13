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

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions
        onClickGood={() => setGood(good + 1)}
        onClickNeutral={() => setNeutral(neutral + 1)}
        onClickBad={() => setBad(bad + 1)}
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
