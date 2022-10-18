import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({
  good,
  neutral,
  bad,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => {
  return (
    <div className={css.statContainer}>
      <ul className={css.statList}>
        <li className={css.statItem}>
          <p className={css.statText}>
            Good:
            <span className={css.statValue}>{good}</span>
          </p>
        </li>
        <li className={css.statItem}>
          <p className={css.statText}>
            Neutral:
            <span className={css.statValue}>{neutral}</span>
          </p>
        </li>
        <li className={css.statItem}>
          <p className={css.statText}>
            Bad:
            <span className={css.statValue}>{bad}</span>
          </p>
        </li>
      </ul>
      <ul className={css.resultList}>
        <li className={css.statItem}>
          <p className={css.statText}>
            Total:
            <span className={css.statValue}>{countTotalFeedback}</span>
          </p>
        </li>
        <li className={`${css.statItem} ${css.percentageItem}`}>
          <p className={css.statText}>
            Positive feedback:
            <span className={css.statValue}>
              {countPositiveFeedbackPercentage}
            </span>
            <span className={css.percentage}>%</span>
          </p>
        </li>
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
