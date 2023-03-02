// outside library
import PropTypes from 'prop-types';
// inside src
import './GlobalStyles.scss';
import '~/assets/styles/grid.css';
import '~/assets/styles/flaticon.css';
import '~/assets/styles/themify-icons.css';

function GlobalStyles({ children }) {
  // return React.Children.only(children); //sử dụng khi muốn chỉ nhận 1 children
  return children;
}

GlobalStyles.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalStyles;
