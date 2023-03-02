/* Outside Source Library */
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

/* Inside Source */
import styles from './About.module.scss';
import BackgroundImage from '~/components/BackgroundImage';
import Heading from './../Heading/Heading';
import RevealBox from '~/components/RevealBox';
import images from '~/assets/images';
const cx = classNames.bind(styles);

const aboutData = {
  img: images.about[1],
  subTitle: 'About Us',
  title: 'Make Your Tour Memorable and Safe With Us',
  captions: [
    'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
  ],
  buttonText: 'book your destination',
};

function About() {
  return (
    <div className={cx('row', 'container')}>
      <div className={cx('col-sm-12 col-md-12 col-lg-12')}>
        <div className={cx('row')}>
          <div className={cx('col col-sm-12 col-md-12 col-lg-6')}>
            <BackgroundImage
              image={aboutData.img}
              height={
                window.matchMedia('(min-width: 1200px)').matches
                  ? 650
                  : window.matchMedia('(min-width: 768px)').matches
                  ? 550
                  : 400
              }
              className={cx('about-image')}
            />
          </div>
          <div className={cx('col-sm-12 col-md-12 col-lg-6')}>
            <RevealBox>
              <Heading data={aboutData} />
            </RevealBox>
          </div>
        </div>
      </div>
    </div>
  );
}

About.propTypes = {
  data: PropTypes.object.isRequired,
};

export default About;
