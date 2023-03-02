/* Outside Source Library */
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

/* Inside Source */
import styles from './FeedItem.module.scss';
import BackgroundImage from '~/components/BackgroundImage';

const cx = classNames.bind(styles);

function FeedItem({ data }) {
  const { star, message, avatar, userName } = data;
  return (
    <div className='col'>
      <div className={cx('col-item')}>
        <p className={cx('star')}>{<i className={cx('ti-star')}></i>}</p>
        <p>{message}</p>
        <div className={cx('d-flex')}>
          <BackgroundImage
            borderRadiusPercent={50}
            height={80}
            width={80}
            image={avatar}
          />
          <div className={cx('user-info')}>
            <p>{userName}</p>
            <p>something...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

FeedItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default FeedItem;
