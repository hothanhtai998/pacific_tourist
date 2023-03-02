/* Outside Source Library */
import PropTypes from 'prop-types';

function Input({ data, className }) {
  const { type, placeholder = '' } = data;
  return <input className={className} type={type} placeholder={placeholder} />;
}

Input.propTypes = {
  data: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default Input;
