import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onMakeFeedback }) => {
  const keys = Object.keys(options);
  return keys.map(key => {
    return (
      <button
        className={css.button}
        key={key}
        onClick={onMakeFeedback}
        name={key}
      >
        {key}
      </button>
    );
  });
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onMakeFeedback: PropTypes.func.isRequired,
};
