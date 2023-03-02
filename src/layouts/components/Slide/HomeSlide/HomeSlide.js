/* Outside Source Library */
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

/* Inside Source */
import styles from './HomeSlide.module.scss';
import VideoButton from '~/components/Button/VideoButton';

const cx = classNames.bind(styles);

function HomeSlide({ data, className }) {
  const { title, subTitle, captions } = data;

  return (
    <div className={cx('row', className)}>
      <div className={cx('col col-sm-12 col-md-9 col-lg-7')}>
        <div className={cx('col-item')}>
          <span className={cx('sub-title')}>{subTitle}</span>
          <h1 className={cx('title')}>{title}</h1>
          <p className={cx('caption')}>{captions}</p>
        </div>
      </div>
      <div className={cx('col col-sm-12 col-md-3 col-lg-5')}>
        <VideoButton />
      </div>
    </div>
  );
}

HomeSlide.propTypes = {
  data: PropTypes.object.isRequired,
};

export default HomeSlide;
