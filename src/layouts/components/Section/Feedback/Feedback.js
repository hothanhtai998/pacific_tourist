/* Outside Source Library */
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import RevealBox from '~/components/RevealBox';

import Heading from './../Heading/Heading';
import FeedItem from './FeedItem/FeedItem';
import images from '~/assets/images';

const feedbackData = {
  img: images.feedbackBg,
  subTitle: 'Testimonial',
  title: 'Tourist Feedback',
  captions: [],
};

const feedbackDb = [
  {
    id: 1,
    star: 5,
    message:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    avatar: images.feedbackAvt[0],
    userName: 'Roger Scott',
  },
  {
    id: 2,
    star: 5,
    message:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    avatar: images.feedbackAvt[1],
    userName: 'John Smith',
  },
  {
    id: 3,
    star: 5,
    message:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    avatar: images.feedbackAvt[2],
    userName: 'Juno Beach',
  },
  // {
  //   id: 4,
  //   star: 5,
  //   message:
  //     'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  //   avatar: images.feedbackAvt[3],
  //   userName: 'Hart Leaf',
  // },
];

function Feedback() {
  return (
    <RevealBox>
      <div className='row'>
        <div className='col col-sm-12 col-md-12 col-lg-12'>
          <Heading className='text-white' data={feedbackData} />
        </div>
      </div>
      <div className='row'>
        <div className='col col-sm-12 col-md-12 col-lg-12'>
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
            arrows={false}
            centerMode={false}
            draggable
            showDots
            renderDotsOutside
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
            {feedbackDb.map((data, key) => {
              return <FeedItem key={key} data={data} />;
            })}
          </Carousel>
        </div>
      </div>
    </RevealBox>
  );
}

export default Feedback;
