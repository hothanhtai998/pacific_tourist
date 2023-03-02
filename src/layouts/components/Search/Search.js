/* Outside Source Library */
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
/* Inside Source */

import styles from './Search.module.scss';
import TourSearch from './TourSearch';

const cx = classNames.bind(styles);

function Search({ page }) {
  const isHomePage = String(page).toLowerCase();
  const mTop = -100;

  return (
    <div
      style={{ marginTop: isHomePage === 'home' ? mTop : 100 }}
      className={cx('search-area')}
    >
      {/* {isTourSearch ? <TourSearch /> : <HotelSearch />} */}
      <div className='grid wide'>
        <div className='row'>
          {isHomePage === 'home' && (
            <div className='col col-sm-12 col-md-12 col-lg-12'>
              <Link>
                <span className={cx('isActive', 'search-heading')}>
                  Search Tour
                </span>
              </Link>
              <Link>
                <span className={cx('search-heading')}> Hotel</span>
              </Link>
            </div>
          )}
          <div className='col col-sm-12 col-md-12 col-lg-12'>
            <div className={cx('wrapper')}>
              <TourSearch />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
