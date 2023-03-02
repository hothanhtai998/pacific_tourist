/* Outside Source Library */
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Select.module.scss';

const cx = classNames.bind(styles);

function Select({ data }) {
  return (
    <select className={cx('select-option')}>
      {data.map((value, key) => {
        return (
          <option key={key} value={value}>
            ${value}
          </option>
        );
      })}
    </select>
  );
}

Select.propTypes = {
  data: PropTypes.array,
};

export default Select;
