import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({
  onClickGood,
  onClickNeutral,
  onClickBad,
}) => {
  return (
    <ul>
      <li>
        <button className={css.button} type="button" onClick={onClickGood}>
          Good
        </button>
      </li>
      <li>
        <button className={css.button} type="button" onClick={onClickNeutral}>
          Neutral
        </button>
      </li>
      <li>
        <button className={css.button} type="button" onClick={onClickBad}>
          Bad
        </button>
      </li>
    </ul>
  );
};

FeedbackOptions.propTypes = {
  onClickGood: PropTypes.func.isRequired,
  onClickNeutral: PropTypes.func.isRequired,
  onClickBad: PropTypes.func.isRequired,
};
