import Slide from '~/layouts/components/Slide';
import images from '~/assets/images';
import Section from '~/layouts/components/Section';
import Introduce from '~/layouts/components/Section/Introduce';
import Contact from '~/layouts/components/Section/Contact';

const slideData = {
  img: images.pageSlide,
  alt: 'Mountain',
  subTitle: 'Welcome to Pacific',
  title: 'Discover Your Favorite Place with Us',
  captions: [
    'Travel to the any corner of the world, without going around in circles',
  ],
  prePage: 'home',
  curPage: 'contact',
};

function ContactPage() {
  return (
    <>
      <Slide data={slideData} />
      <Section className='text-center'>
        <Contact />
      </Section>
      <Section className='pt-0 text-center'>
        <Introduce />
      </Section>
    </>
  );
}

export default ContactPage;
