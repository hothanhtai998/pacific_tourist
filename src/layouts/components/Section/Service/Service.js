/* Outside Source Library */
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

/* Inside Source */
import styles from './Service.module.scss';
import Heading from './../Heading/Heading';
import ServiceImage from './ServiceImage/ServiceImage';
import images from '~/assets/images';
const cx = classNames.bind(styles);

function Service({ data }) {
  console.log(images);
  return (
    <div className='row'>
      <div className='col col-12 col-sm-12 col-md-12 col-lg-6'>
        <div className='row'>
          <ServiceImage
            data={{
              image: images.service1,
              title: 'Activities',
              caption:
                'A small river named Duden flows by their place and supplies it with the necessary',
              color: 1,
            }}
          />
          <ServiceImage
            data={{
              image: images.service2,
              title: 'Travel Arrangements',
              caption:
                'A small river named Duden flows by their place and supplies it with the necessary',
              color: 2,
            }}
          />
          <ServiceImage
            data={{
              image: images.service3,
              title: 'Private Guide',
              caption:
                'A small river named Duden flows by their place and supplies it with the necessary',
              color: 2,
            }}
          />
          <ServiceImage
            data={{
              image: images.service4,
              title: 'Location Manager',
              caption:
                'A small river named Duden flows by their place and supplies it with the necessary',
              color: 3,
            }}
          />
        </div>
      </div>
      <div className='col col-12 col-sm-12 col-md-12 col-lg-6'>
        <div className={cx('col-item')}>
          <Heading data={data} />
        </div>
      </div>
    </div>
  );
}

Service.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Service;
