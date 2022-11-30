import Slide from '~/layouts/components/Slide';
import images from '~/assets/images';
import Search from '~/layouts/components/Search';
import Section from '~/layouts/components/Section';
import Service from '~/layouts/components/Section/Service';

function Home() {
  const data = {
    img: images.homeSlide,
    alt: 'Mountain',
    subTitle: 'Welcome to Pacific',
    title: 'Discover Your Favorite Place with Us',
    caption:
      'Travel to the any corner of the world, without going around in circles',
  };
  const serviceData = {
    subTitle: 'Welcome to Pacific',
    title: "It's time to start your adventure",
    captions: [
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    ],
  };
  return (
    <div>
      <Slide data={data} />
      <Search />
      <Section>
        <Service data={serviceData} />
      </Section>
    </div>
  );
}

export default Home;
