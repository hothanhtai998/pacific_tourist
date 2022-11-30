/* Outside Source Library */
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

/* Inside Source */

import styles from './TourSearch.module.scss';
import '~/assets/styles/grid.css';
import Select from '~/components/Select';
import Input from '~/components/Input';

const cx = classNames.bind(styles);

function TourSearch({ data }) {
  return (
    <div className='col col-sm-12 col-md-12 col-lg-12'>
      <div className='row no-gutters'>
        {data.map((d, key) => {
          return (
            <div key={key} className='col col-lg-2-4'>
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
    </div>
  );
}

TourSearch.propTypes = {
  data: PropTypes.array.isRequired,
};

export default TourSearch;
