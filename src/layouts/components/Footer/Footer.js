// import outside library
import classNames from 'classnames/bind';

// import css
import styles from './Footer.module.scss';
import BackgroundImage from '~/components/BackgroundImage';
import images from '~/assets/images';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Footer() {
  return (
    <footer>
      <BackgroundImage className={cx('container')} image={images.footer}>
        <div className='grid wide'>
          <div className='row'>
            <div className='col-sm-12 col-md-12 col-lg-12'>
              <div className='row'>
                <div className={cx('col col-sm-12 col-md-6 col-lg-3')}>
                  <div className={cx('col-item')}>
                    <h2>About</h2>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <ul className={cx('ft-icon')}>
                      <li>
                        <Link>
                          <i className={cx('ti-facebook')}></i>
                        </Link>
                      </li>
                      <li>
                        <Link>
                          <i className={cx('ti-twitter')}></i>
                        </Link>
                      </li>
                      <li>
                        <Link>
                          <i className={cx('ti-instagram')}></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className={cx(
                    'col col-sm-12 col-md-6 col-lg-3',
                    'border-left'
                  )}
                >
                  <div className={cx('col-item')}>
                    <h2>Information</h2>
                    <ul className={cx('list')}>
                      <li>
                        <Link>Online Enquiry</Link>
                      </li>
                      <li>
                        <Link>General Enquiries</Link>
                      </li>
                      <li>
                        <Link>Booking Conditions</Link>
                      </li>
                      <li>
                        <Link>Privacy and Policy</Link>
                      </li>
                      <li>
                        <Link>Refund Policy</Link>
                      </li>
                      <li>
                        <Link>Call Us</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div
                  className={cx(
                    'col col-sm-12 col-md-6 col-lg-3',
                    'border-left'
                  )}
                >
                  <div className={cx('col-item')}>
                    <h2>Experience</h2>
                    <ul className={cx('list')}>
                      <li>
                        <Link>Adventure</Link>
                      </li>
                      <li>
                        <Link>Hotel and Restaurant</Link>
                      </li>
                      <li>
                        <Link>Beach</Link>
                      </li>
                      <li>
                        <Link>Nature</Link>
                      </li>
                      <li>
                        <Link>Camping</Link>
                      </li>
                      <li>
                        <Link>Party</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className={cx(
                    'col col-sm-12 col-md-6 col-lg-3',
                    'border-left'
                  )}
                >
                  <div className={cx('col-item')}>
                    <h2>Have a Questions?</h2>
                    <ul className={cx('list')}>
                      <li>
                        <i className={cx('ti-home')}></i>
                        203 Fake St. Mountain View, San Francisco, California,
                        USA
                      </li>
                      <li>
                        <i className={cx('ti-headphone-alt')}></i>
                        <Link>+2 392 3929 210</Link>
                      </li>
                      <li>
                        <i className={cx('ti-email')}></i>{' '}
                        <Link>info@yourdomain.com</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col col-sm-12 col-md-12 col-lg-12'>
              <p className={cx('copy-right')}>
                Copyright ©2022 All rights reserved
              </p>
            </div>
          </div>
        </div>
      </BackgroundImage>
    </footer>
  );
}

export default Footer;
