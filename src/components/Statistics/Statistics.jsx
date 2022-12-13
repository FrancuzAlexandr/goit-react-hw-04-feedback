import Protypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ good, neutral, bad, total, percentage }) => {
  return (
    <>
      <h2 className={css.title}>Statistic</h2>
      <ul className={css.items}>
        <li>good: {good}</li>
        <li>neutral: {neutral}</li>
        <li>bad: {bad}</li>
        <li>total: {total}</li>
        <li>percentage: {percentage}%</li>
      </ul>
    </>
  );
};

Statistics.propTypes = {
  good: Protypes.number.isRequired,
  neutral: Protypes.number.isRequired,
  bad: Protypes.number.isRequired,
  total: Protypes.number.isRequired,
  percentage: Protypes.number.isRequired,
};
