import Slide from '~/layouts/components/Slide';
import images from '~/assets/images';
import Search from '~/layouts/components/Search';
import Section from '~/layouts/components/Section';

function Home() {
  const data = {
    img: images.homeSlide,
    alt: 'Mountain',
    subTitle: 'Welcome to Pacific',
    title: 'Discover Your Favorite Place with Us',
    caption:
      'Travel to the any corner of the world, without going around in circles',
  };
  return (
    <div>
      <Slide data={data} />
      <Search />
      <Section />
    </div>
  );
}

export default Home;
