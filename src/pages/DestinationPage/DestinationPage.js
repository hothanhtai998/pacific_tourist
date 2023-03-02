import Slide from '~/layouts/components/Slide';
import images from '~/assets/images';
import Section from '~/layouts/components/Section';
import Introduce from '~/layouts/components/Section/Introduce';
import Search from '~/layouts/components/Search';
import Destination from '~/layouts/components/Section/Destination';

const slideData = {
  img: images.pageSlide,
  alt: 'Mountain',
  subTitle: 'Welcome to Pacific',
  title: 'Discover Your Favorite Place with Us',
  captions: [
    'Travel to the any corner of the world, without going around in circles',
  ],
  prePage: 'home',
  curPage: 'destination',
};

function DestinationPage() {
  return (
    <>
      <Slide data={slideData} />
      <Search page={slideData.curPage} />
      <Section className='text-center'>
        <Destination page={slideData.curPage} />
      </Section>
      <Section className='pt-0 text-center'>
        <Introduce />
      </Section>
    </>
  );
}

export default DestinationPage;
