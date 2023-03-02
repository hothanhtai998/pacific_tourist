/* Outside Source Library */
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

/* Inside Source */
import styles from './HotelContent.module.scss';
import BackgroundImage from '~/components/BackgroundImage';
const cx = classNames.bind(styles);

function HotelContent({ database }) {
  const {
    image,
    price,
    day,
    boxTitle,
    location,
    bathNumber,
    bedNumber,
    nearBy,
  } = database;
  return (
    <div className='col col-sm-12 col-md-6 col-lg-4'>
      <div className={cx('col-item')}>
        <BackgroundImage height={300} image={image}>
          <span className={cx('price')}>{price}</span>
        </BackgroundImage>
        <div className={cx('text-box')}>
          <span className={cx('day')}>{day}</span>
          <h3 className={cx('box-title')}>{boxTitle}</h3>
          <p className={cx('location')}>{location}</p>
          <ul className={cx('des-list')}>
            <li>
              <span className={cx('flaticon-shower', 'icon')}></span>
              {bathNumber}
            </li>
            <li>
              <span className={cx('icon', 'flaticon-king-size')}></span>
              {bedNumber}
            </li>
            <li>
              <span className={cx('flaticon-sun-umbrella', 'icon')}></span>Near
              &#160;
              {nearBy}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

HotelContent.propTypes = {
  database: PropTypes.object.isRequired,
};

export default HotelContent;
