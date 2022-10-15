import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ addReviewGood, addReviewNeutral, addReviewBad }) => {
  return (
    <div className={css.feedbackContainer}>
      <ul className={css.feedbackList}>
        <li className={css.feedbackItem}>
          <button
            type="button"
            onClick={addReviewGood}
            className={`${css.button} ${css.goodButton}`}
          >
            Good
          </button>
        </li>
        <li className={css.feedbackItem}>
          <button
            type="button"
            onClick={addReviewNeutral}
            className={`${css.button} ${css.neutralButton}`}
          >
            Neutral
          </button>
        </li>
        <li className={css.feedbackItem}>
          <button
            type="button"
            onClick={addReviewBad}
            className={`${css.button} ${css.badButton}`}
          >
            Bad
          </button>
        </li>
      </ul>
    </div>
  );
};

FeedbackOptions.prototype = {
  addReviewGood: PropTypes.number.isRequired,
  addReviewNeutral: PropTypes.number.isRequired,
  addReviewBad: PropTypes.number.isRequired,
};

export default FeedbackOptions;
