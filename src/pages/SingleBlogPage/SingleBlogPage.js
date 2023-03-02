import { useLocation } from 'react-router-dom';

import Slide from '~/layouts/components/Slide';
import images from '~/assets/images';
import Section from '~/layouts/components/Section';
import Introduce from '~/layouts/components/Section/Introduce';

import SingleBlog from '~/layouts/components/Section/BlogPost/SingleBlog';

const slideData = {
  img: images.pageSlide,
  alt: 'Mountain',
  subTitle: 'Welcome to Pacific',
  title: 'Discover Your Favorite Place with Us',
  captions: [
    'Travel to the any corner of the world, without going around in circles',
  ],
  prePage: 'blog',
  curPage: 'single blog',
};

function SingleBlogPage() {
  const location = useLocation();
  const blogContent = location.state;
  console.log(blogContent);
  return (
    <>
      <Slide className='single-blog-image' data={slideData} />
      <SingleBlog data={blogContent} />
      <Section className='text-center'>
        <Introduce />
      </Section>
    </>
  );
}

export default SingleBlogPage;
