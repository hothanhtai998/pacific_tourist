import Slide from '~/layouts/components/Slide';
import images from '~/assets/images';

function Home() {
  console.log(images);
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
    </div>
  );
}

export default Home;
