/* Outside Source Library */
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useState } from 'react';
/* Inside Source */
import styles from './BlogPost.module.scss';
import Heading from './../Heading';
import PostContent from './PostContent';
import Pagination from '~/layouts/components/Pagination';
import RevealBox from '~/components/RevealBox';
import images from '~/assets/images';
import { useEffect } from 'react';
const cx = classNames.bind(styles);

const blogPostData = {
  title: 'Our Blog',
  subTitle: 'Recent Post',
  captions: [],
};

const blogPostDb = [
  {
    id: 1,
    image: images.blog[0],
    day: 21,
    month: 'January',
    year: 2022,
    boxTitle: 'Travel Around World',
    author: {
      authorId: 1,
      name: 'Harvard milan',
      image: images.authorImage,
      description:
        "Second divided from form fish beast made. Every of seas all gathered use saying you're, he our dominion twon Second divided from",
    },
    comments: [
      {
        commentId: 1,
        userId: 1,
        name: 'Emilly Blunt',
        image: images.commentImage[0],
        message:
          'Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser',
        date: '',
      },
      {
        commentId: 2,
        userId: 2,
        name: 'John Smith',
        image: images.commentImage[1],
        message:
          'Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser',
        date: '',
      },
      {
        commentId: 3,
        userId: 3,
        name: 'James',
        image: images.commentImage[2],
        message:
          'Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser',
        date: '',
      },
    ],
    contents: [
      'MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower',
      'MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually',
      'MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower',
      'MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually',
    ],
    quote:
      'MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training.',
  },
  {
    id: 2,
    image: images.blog[1],
    day: 12,
    month: 'May',
    year: 2022,
    boxTitle: 'Sun beach',
    author: {
      authorId: 2,
      name: 'John Smith',
      image: images.authorImage,
      description:
        "Second divided from form fish beast made. Every of seas all gathered use saying you're, he our dominion twon Second divided from",
    },
    comments: [
      {
        commentId: 1,
        userId: 1,
        name: 'Emilly Blunt',
        image: images.commentImage[0],
        message:
          'Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser',
        date: '',
      },
    ],
    contents: [
      'MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower',
      'MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually',
      'MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower',
      'MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually',
      'MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually',
    ],
    quote:
      'MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training.',
  },
  {
    id: 3,
    image: images.blog[2],
    day: 30,
    month: 'January',
    year: 2022,
    boxTitle: 'The big city',
    author: {
      authorId: 3,
      name: 'Mari Chart',
      image: images.authorImage,
      description:
        "Second divided from form fish beast made. Every of seas all gathered use saying you're, he our dominion twon Second divided from",
    },
    comments: [
      {
        commentId: 1,
        userId: 1,
        name: 'Emilly Blunt',
        image: images.commentImage[0],
        message:
          'Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser',
        date: '',
      },
      {
        commentId: 2,
        userId: 2,
        name: 'John Smith',
        image: images.commentImage[1],
        message:
          'Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser',
        date: '',
      },
    ],
    contents: [
      'MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower',
      'MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually',
      'MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower',
      'MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually',
    ],
    quote:
      'MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training.',
  },
  {
    id: 4,
    image: images.blog[3],
    day: 3,
    month: 'July',
    year: 2022,
    boxTitle: 'Green mountains',
    author: {
      authorId: 1,
      name: 'Gardner Clare',
      image: images.authorImage,
      description:
        "Second divided from form fish beast made. Every of seas all gathered use saying you're, he our dominion twon Second divided from",
    },
    comments: [
      {
        commentId: 1,
        userId: 1,
        name: 'Emilly Blunt',
        image: images.commentImage[0],
        message:
          'Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser',
        date: '',
      },
      {
        commentId: 2,
        userId: 2,
        name: 'John Smith',
        image: images.commentImage[1],
        message:
          'Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser',
        date: '',
      },
      {
        commentId: 3,
        userId: 3,
        name: 'James',
        image: images.commentImage[2],
        message:
          'Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser',
        date: '',
      },
    ],
    contents: [
      'MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower',
      'MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually',
      'MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower',
      'MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually',
    ],
    quote:
      'MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training.',
  },
  {
    id: 5,
    image: images.blog[4],
    day: 1,
    month: 'October',
    year: 2022,
    boxTitle: 'Girl and River',
    author: {
      authorId: 1,
      name: 'Ariane Lenna',
      image: images.authorImage,
      description:
        "Second divided from form fish beast made. Every of seas all gathered use saying you're, he our dominion twon Second divided from",
    },
    comments: [
      {
        commentId: 1,
        userId: 1,
        name: 'Emilly Blunt',
        image: images.commentImage[0],
        message:
          'Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser',
        date: '',
      },
      {
        commentId: 2,
        userId: 2,
        name: 'John Smith',
        image: images.commentImage[1],
        message:
          'Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser',
        date: '',
      },
      {
        commentId: 3,
        userId: 3,
        name: 'James',
        image: images.commentImage[2],
        message:
          'Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser',
        date: '',
      },
    ],
    contents: [
      'MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower',
      'MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually',
      'MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower',
      'MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually',
    ],
    quote:
      'MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training.',
  },
  {
    id: 6,
    image: images.blog[5],
    day: 21,
    month: 'December',
    year: 2022,
    boxTitle: 'Tet holiday',
    author: {
      authorId: 1,
      name: 'T998',
      image: images.authorImage,
      description:
        "Second divided from form fish beast made. Every of seas all gathered use saying you're, he our dominion twon Second divided from",
    },
    comments: [
      {
        commentId: 1,
        userId: 1,
        name: 'Emilly Blunt',
        image: images.commentImage[0],
        message:
          'Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser',
        date: '',
      },
      {
        commentId: 2,
        userId: 2,
        name: 'John Smith',
        image: images.commentImage[1],
        message:
          'Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser',
        date: '',
      },
      {
        commentId: 3,
        userId: 3,
        name: 'James',
        image: images.commentImage[2],
        message:
          'Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser',
        date: '',
      },
    ],
    contents: [
      'MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower',
      'MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually',
      'MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower',
      'MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually',
    ],
    quote:
      'MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training.',
  },
];

function BlogPost({ page }) {
  const [posts] = useState(blogPostDb);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(6);
  const checkPage = String(page).toLowerCase();

  useEffect(() => {
    if (checkPage === 'home') {
      setPostPerPage(3);
    }
  }, [checkPage]);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <RevealBox>
        {checkPage !== 'blog' && (
          <div className='row'>
            <div className='col col-sm-12 col-md-12 col-lg-12'>
              <Heading classNames={cx('text-center')} data={blogPostData} />
            </div>
          </div>
        )}
        <div className='row'>
          {currentPosts.map((post, key) => {
            return (
              <PostContent key={key} data={blogPostData} database={post} />
            );
          })}
        </div>
      </RevealBox>
      <Pagination
        itemPerPage={postPerPage}
        totalItems={posts.length}
        paginate={paginate}
      />
    </>
  );
}

BlogPost.propTypes = {
  page: PropTypes.string.isRequired,
};

export default BlogPost;
