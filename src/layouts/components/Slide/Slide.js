/* Outside Source Library */
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

/* Inside Source */
import '~/assets/styles/grid.css';
import styles from './Slide.module.scss';
import Overlay from '~/layouts/components/Overlay';

const cx = classNames.bind(styles);

function Slide({ data }) {
  const { img, title, subTitle, caption } = data;
  const styles = {
    width: '100vw',
    height: '100vh',
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundAttachment: 'fixed',
  };

  return (
    <div style={styles} className={cx('slide-area')}>
      <Overlay />
      <div className='grid wide'>
        <div className={cx('container')}>
          <div className='row sm-gutter'>
            <div className='col col-sm-12 col-md-9 col-lg-8'>
              <span className={cx('sub-title')}>{subTitle}</span>
              <h1 className={cx('title')}>{title}</h1>
              <p className={cx('caption')}>{caption}</p>
            </div>
            <div className='col col-sm-12 col-md-3 col-lg-4'>
              <button className={cx('play-video-btn')}></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Slide.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Slide;
