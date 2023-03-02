/* Outside Source Library */
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

/* Inside Source */

import styles from './TourSearch.module.scss';
import '~/assets/styles/grid.css';
import Select from '~/components/Form/Select';
import Input from '~/components/Form/Input';
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
    type: 'datetime',
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
const cx = classNames.bind(styles);

function TourSearch() {
  return (
    <div className='row no-gutters'>
      {data.map((d, key) => {
        return (
          <div key={key} className='col-sm-12 col-md-2-4 col-lg-2-4'>
            <div className={cx('col-item')}>
              <label>{d.title}</label>
              {d.type === 'select' ? (
                <Select data={d.value} />
              ) : (
                <Input data={{ type: d.type, placeholder: d.placeholder }} />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

TourSearch.propTypes = {
  data: PropTypes.array.isRequired,
};

export default TourSearch;
