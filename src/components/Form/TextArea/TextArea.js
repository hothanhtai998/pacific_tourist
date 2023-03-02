/* Outside Source Library */
import PropTypes from 'prop-types';

function TextArea({ data, className }) {
  const { colNumber, rowNumber, placeholder = '' } = data;
  return (
    <textarea
      className={className}
      cols={colNumber}
      rows={rowNumber}
      placeholder={placeholder}
    ></textarea>
  );
}

TextArea.propTypes = {
  data: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default TextArea;
