/* Outside Source Library */
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

/* Inside Source */
import styles from './Service.module.scss';
import Heading from './../Heading/Heading';
import ServiceImage from './ServiceImage/ServiceImage';
import images from '~/assets/images';
import RevealBox from '~/components/RevealBox';
const cx = classNames.bind(styles);

const serviceData = {
  subTitle: 'Welcome to Pacific',
  title: "It's time to start your adventure",
  captions: [
    'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
    'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  ],
  buttonText: 'search destination',
};

function Service() {
  return (
    <div className={cx('row', 'container')}>
      <div className={cx('col-sm-12 col-md-12 col-lg-12')}>
        <div className={cx('row')}>
          <div className={cx('col-sm-12 col-md-12 col-lg-6')}>
            <RevealBox>
              <div className='row'>
                <ServiceImage
                  data={{
                    image: images.service1,
                    title: 'Activities',
                    caption:
                      'A small river named Duden flows by their place and supplies it with the necessary',
                    color: 1,
                    className: 'flaticon-paragliding',
                  }}
                />
                <ServiceImage
                  data={{
                    image: images.service2,
                    title: 'Travel Arrangements',
                    caption:
                      'A small river named Duden flows by their place and supplies it with the necessary',
                    color: 2,
                    className: 'flaticon-route',
                  }}
                />
                <ServiceImage
                  data={{
                    image: images.service3,
                    title: 'Private Guide',
                    caption:
                      'A small river named Duden flows by their place and supplies it with the necessary',
                    color: 2,
                    className: 'flaticon-tour-guide',
                  }}
                />
                <ServiceImage
                  data={{
                    image: images.service4,
                    title: 'Location Manager',
                    caption:
                      'A small river named Duden flows by their place and supplies it with the necessary',
                    color: 3,
                    className: 'flaticon-map',
                  }}
                />
              </div>
            </RevealBox>
          </div>
          <div className={cx('col-sm-12 col-md-12 col-lg-6')}>
            <Heading data={serviceData} />
          </div>
        </div>
      </div>
    </div>
  );
}

Service.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Service;
