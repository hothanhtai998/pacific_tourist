import Slide from '~/layouts/components/Slide';
import images from '~/assets/images';
import Overlay from '~/layouts/components/Overlay';
import Section from '~/layouts/components/Section';
import Service from '~/layouts/components/Section/Service';
import About from '~/layouts/components/Section/About';
import Feedback from '~/layouts/components/Section/Feedback';
import Introduce from '~/layouts/components/Section/Introduce';
import VideoButton from '~/components/Button/VideoButton';

const slideData = {
  img: images.pageSlide,
  alt: 'Mountain',
  subTitle: 'Welcome to Pacific',
  title: 'Discover Your Favorite Place with Us',
  captions: [
    'Travel to the any corner of the world, without going around in circles',
  ],
  prePage: 'home',
  curPage: 'about us',
};

function AboutPage() {
  return (
    <>
      <Slide data={slideData} />
      <Section>
        <Service />
      </Section>

      <Section padtb={220} className='text-center' image={images.about[0]}>
        <Overlay />
        <VideoButton />
      </Section>
      <Section className='pt-0'>
        <About />
      </Section>
      <Section className='text-center' image={images.feedbackBg}>
        <Overlay className='overlay-1' />
        <Feedback />
      </Section>

      <Section className='text-center'>
        <Introduce />
      </Section>
    </>
  );
}

export default AboutPage;
