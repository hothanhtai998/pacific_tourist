/* Outside Source Library */
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
/* Inside Source */

import styles from './Search.module.scss';
import TourSearch from './TourSearch';

const cx = classNames.bind(styles);

function Search() {
  const data = [
    // title: ['destination', 'check-in-date', 'check-out-date', 'price'],
    // inputType: ['text', 'date', 'number'],
    {
      title: 'destination',
      type: 'text',
      placeholder: 'Search place',
    },
    {
      title: 'check-in-date',
      type: 'date',
      placeholder: 'Check In Date',
    },
    {
      title: 'check-out-date',
      type: 'date',
      placeholder: 'Check Out Date',
    },
    {
      title: 'price',
      type: 'select',
      value: [100, 200, 300, 400, 500],
      placeholder: 'pri',
    },
    {
      title: 'search',
      type: 'button',
    },
  ];
  return (
    <div className={cx('search-area')}>
      {/* {isTourSearch ? <TourSearch /> : <HotelSearch />} */}
      <div className='grid wide'>
        <div className='row'>
          <div className='col col-sm-12 col-md-12 col-lg-12'>
            <Link>
              <span className={cx('isActive')}> Search Tour</span>
            </Link>
            <Link>
              <span> Hotel</span>
            </Link>
          </div>
          <div className={cx('wrapper')}>
            <TourSearch data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
