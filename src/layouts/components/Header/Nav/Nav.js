import PropTypes from 'prop-types';

function Nav({ children }) {
  return <nav>{children}</nav>;
}

Nav.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Nav;
