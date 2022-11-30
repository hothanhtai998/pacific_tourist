/* Outside Source Library */
import PropTypes from 'prop-types';

/* Inside Source */
import '~/assets/styles/grid.css';

function GridView({ children }) {
  return <>{children}</>;
}

GridView.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GridView;
