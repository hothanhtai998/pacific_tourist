// outside library
import PropTypes from 'prop-types';

// inside src
import './GlobalStyles.scss';

function GlobalStyles({ children }) {
  // return React.Children.only(children); //sử dụng khi muốn chỉ nhận 1 children
  return children;
}

GlobalStyles.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalStyles;
