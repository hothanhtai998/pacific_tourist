/* Outside Source Library */
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

/* Inside Source */
import styles from './Place.module.scss';
import Heading from './../Heading/Heading';
import BackgroundImage from '~/components/BackgroundImage';
import RevealBox from '~/components/RevealBox';
import images from '~/assets/images';

const cx = classNames.bind(styles);

const placeData = {
  img: images.placeBg,
  subTitle: 'Pacific Provide Places',
  title: 'Select Your Destination',
  captions: [],
};

const placeDb = [
  {
    id: 1,
    img: images.place[0],
    country: 'Philippines',
    quantity: 5,
  },
  {
    id: 1,
    img: images.place[1],
    country: 'Canada',
    quantity: 2,
  },
  {
    id: 1,
    img: images.place[2],
    country: 'Americans',
    quantity: 9,
  },
  {
    id: 1,
    img: images.place[3],
    country: 'Chinese',
    quantity: 1,
  },
  {
    id: 1,
    img: images.place[4],
    country: 'Country 5',
    quantity: 7,
  },
];

function Place({ data, database }) {
  return (
    <RevealBox>
      <div className='row'>
        <div className='col col-sm-12 col-md-12 col-lg-12'>
          <Heading classNames={cx('text-center')} data={placeData} />
        </div>
        <div className='col-sm-12 col-md-12 col-lg-12'>
          <Carousel
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024,
                },
                items: 3,
                partialVisibilityGutter: 40,
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0,
                },
                items: 1,
                partialVisibilityGutter: 30,
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464,
                },
                items: 2,
                partialVisibilityGutter: 30,
              },
            }}
            additionalTransfrom={0}
            arrows
            autoPlay
            autoPlaySpeed={3000}
            centerMode={false}
            draggable
            focusOnSelect={false}
            infinite
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            slidesToSlide={1}
            swipeable
          >
            {placeDb.map((data, key) => {
              return (
                <div key={key} className='col'>
                  <BackgroundImage
                    borderRadius={8}
                    height={320}
                    image={data.img}
                  >
                    <div className={cx('text')}>
                      <h3>{data.country}</h3>
                      <span>{data.quantity} tour</span>
                    </div>
                  </BackgroundImage>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </RevealBox>
  );
}

Place.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Place;
