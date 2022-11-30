/* Outside Source Library */
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

/* Inside Source */
import styles from './Section.module.scss';

const cx = classNames.bind(styles);

function Section({ data }) {
  return;
}

Section.propTypes = {
  data: PropTypes.string.isRequired,
};

export default Section;
