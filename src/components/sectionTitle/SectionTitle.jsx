import PropTypes from 'prop-types';
import css from './SectionTitle.module.css'

const SectionTitle = ({ title, children }) => {
    return (
      <section className={css.wrapperContainer}>
        <h1 className={css.title}>{title}</h1>
        {children}
      </section>
    );
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionTitle;
