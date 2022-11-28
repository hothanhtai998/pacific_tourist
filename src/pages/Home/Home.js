import Slide from '~/layouts/components/Slide';
import { images } from '~/assets/images';

function Home() {
  const data = {
    img: images.homeSlide,
    alt: 'Mountain',
    subTitle: '',
    title: '',
    caption: '',
  };
  return (
    <div>
      <Slide data={data} />
    </div>
  );
}

export default Home;
