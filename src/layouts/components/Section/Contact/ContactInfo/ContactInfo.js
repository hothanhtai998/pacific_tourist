/* Outside Source Library */
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

/* Inside Source */
import styles from './ContactInfo.module.scss';

const cx = classNames.bind(styles);

function ContactInfo({ dataInfo }) {
  const { address, phone, email, website } = dataInfo;
  return (
    <div className='row'>
      <div className='col col-sm-12 col-mg-6 col-lg-3'>
        <div className={cx('col-item')}>
          <div className={cx('info-icon')}>
            <i className={cx('ti-map')}></i>
          </div>
          <h3>Address</h3>
          <p>{address}</p>
        </div>
      </div>
      <div className='col col-sm-12 col-mg-6 col-lg-3'>
        <div className={cx('col-item')}>
          <div className={cx('info-icon')}>
            <i className={cx('ti-headphone-alt')}></i>
          </div>
          <h3>Contact Number</h3>
          <p>+ {phone}</p>
        </div>
      </div>
      <div className='col col-sm-12 col-mg-6 col-lg-3'>
        <div className={cx('col-item')}>
          <div className={cx('info-icon')}>
            <i className={cx('ti-email')}></i>
          </div>
          <h3>Email Address</h3>
          <p>{email}</p>
        </div>
      </div>
      <div className='col col-sm-12 col-mg-6 col-lg-3'>
        <div className={cx('col-item')}>
          <div className={cx('info-icon')}>
            <i className={cx('ti-world')}></i>
          </div>
          <h3>Website</h3>
          <p>{website}</p>
        </div>
      </div>
    </div>
  );
}

ContactInfo.propTypes = {
  dataInfo: PropTypes.object.isRequired,
};

export default ContactInfo;
