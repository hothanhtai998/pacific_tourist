import Slide from '~/layouts/components/Slide';
import images from '~/assets/images';
import Overlay from '~/layouts/components/Overlay';
import Search from '~/layouts/components/Search';
import Section from '~/layouts/components/Section';
import Service from '~/layouts/components/Section/Service';
import Destination from '~/layouts/components/Section/Destination';
import Place from '~/layouts/components/Section/Place';
import About from '~/layouts/components/Section/About';
import BlogPost from '~/layouts/components/Section/BlogPost';
import Introduce from '~/layouts/components/Section/Introduce';
import VideoButton from '~/components/Button/VideoButton';

const slideData = {
  img: images.homeSlide,
  alt: 'Mountain',
  subTitle: 'Welcome to Pacific',
  title: 'Discover Your Favorite Place with Us',
  captions: [
    'Travel to the any corner of the world, without going around in circles',
  ],
  prePage: '',
  curPage: 'home',
};

function Home() {
  return (
    <>
      <Slide data={slideData} />
      <Search page={slideData.curPage} />
      <Section>
        <Service />
      </Section>
      <Section className='text-center' image={images.placeBg}>
        <Place />
      </Section>
      <Section className='text-center'>
        <Destination />
      </Section>
      <Section padtb={220} className='text-center' image={images.about[0]}>
        <Overlay />
        <div className='row'>
          <div className='col-sm-12'>
            <VideoButton />
          </div>
        </div>
      </Section>
      <Section>
        <About />
      </Section>
      <Section
        className={`${
          window.matchMedia('(min-width: 1200px)').matches ? '' : 'pt-0'
        } text-center`}
      >
        <BlogPost page={slideData.page} />
      </Section>
      <Section className='text-center'>
        <Introduce />
      </Section>
    </>
  );
}

export default Home;
