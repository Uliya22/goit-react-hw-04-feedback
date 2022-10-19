import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.feedbackContainer}>
      <ul className={css.feedbackList}>
        {options.map(option => (
          <li className={css.feedbackItem} key={option}>
            <button
              type="button"
              onClick= {() => onLeaveFeedback(option)}
              className={css.button}
              name={option}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};

export default FeedbackOptions;
