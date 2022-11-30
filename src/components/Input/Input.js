/* Outside Source Library */
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

/* Inside Source */
import styles from './Input.module.scss';

const cx = classNames.bind(styles);

function Input({ data }) {
  const { type, placeholder = '' } = data;
  return <input type={type} placeholder={placeholder} />;
}

Input.propTypes = {
  data: PropTypes.string.isRequired,
};

export default Input;
