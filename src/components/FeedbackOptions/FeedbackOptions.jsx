import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onMakeFeedback }) => {
  return (
    <div className={css.feedback__container}>
      {options.map(option => (
        <button
          className={css.feedback__btn}
          type="button"
          key={option}
          name={option}
          onClick={onMakeFeedback}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onMakeFeedback: PropTypes.func.isRequired,
};
