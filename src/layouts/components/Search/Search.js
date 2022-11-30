/* Outside Source Library */
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

/* Inside Source */
import '~/assets/styles/grid.css';

import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search({ data }) {
  return <div className={cx('search-area')}></div>;
}

Search.propTypes = {
  data: PropTypes.string.isRequired,
};

export default Search;
