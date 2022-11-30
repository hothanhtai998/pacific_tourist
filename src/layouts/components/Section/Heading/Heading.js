/* Outside Source Library */
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

/* Inside Source */
import styles from './Heading.module.scss';

const cx = classNames.bind(styles);

function Heading({ data }) {
  const { subTitle, title, captions } = data;
  return (
    <div className={cx('col-item')}>
      <span className={cx('sub-title')}>{subTitle}</span>
      <h2 className={cx('title')}>{title}</h2>
      {captions.length > 1
        ? captions.map((caps, key) => {
            return (
              <p key={key} className={cx('caption')}>
                {caps}
              </p>
            );
          })
        : ''}
    </div>
  );
}

Heading.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Heading;
