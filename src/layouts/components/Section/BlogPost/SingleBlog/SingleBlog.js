/* Outside Source Library */
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

/* Inside Source */
import styles from './SingleBlog.module.scss';
import Image from '~/components/Image';
import Button from '~/components/Button';
import AsideMenu from '~/layouts/components/Section/BlogPost/AsideMenu';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function SingleBlog({ data }) {
  const height = window.matchMedia('(min-width: 768px)').matches ? 300 : 150;
  const style = {
    backgroundImage: `url(${data.image})`,
    width: '100%',
    height: height,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  };
  return (
    <section className={cx('blog-area')}>
      <div className={cx('grid wide')}>
        <div className={cx('row')}>
          <div className={cx('col col-sm-12 col-md-12 col-lg-8')}>
            <div className={cx('single-post')}>
              <div style={style}></div>
              <div className={cx('blog-details')}>
                <h2>{data.boxTitle}</h2>
                <ul className={cx('blog-info-link')}>
                  <li>
                    <i className={cx('ti-user')}></i>
                    <Link> Travel, Lifestyle</Link>
                  </li>
                  <li>
                    <Link>
                      {data.comments.length < 10
                        ? `0${data.comments.length}`
                        : data.comments.length}
                      comments
                    </Link>
                  </li>
                </ul>
                {data.contents.map((content, key) => {
                  return (
                    <>
                      <p key={key}>{content}</p>
                      {key === 1 && (
                        <div className={cx('quote-wrapper')}>
                          <div className={cx('quote')}>
                            <p>{data.quote}</p>
                          </div>
                        </div>
                      )}
                    </>
                  );
                })}
              </div>
            </div>
            <div className={cx('navigation-top')}></div>
            <div className={cx('blog-author')}>
              <div className={cx('media')}>
                <Image src={data.author.image} />
                <div className={cx('media-body')}>
                  <Link>
                    <h4>{data.author.name}</h4>
                  </Link>
                  <p>{data.author.description}</p>
                </div>
              </div>
            </div>
            <div className={cx('comments-area')}>
              <h4>{data.comments.length} comments</h4>
              {data.comments.map((comment, key) => {
                return (
                  <div key={key} className={cx('comment-list')}>
                    <div className={cx('single-comment')}>
                      <div className={cx('user')}>
                        <div className={cx('thumb')}>
                          <Image src={comment.image} />
                        </div>
                        <div className={cx('desc')}>
                          <h5>{comment.name}</h5>
                          <p className={cx('comment')}>{comment.message}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={cx('comment-form')}>
              <h4>Leave a reply</h4>
              <form action='' className={cx('form-contact')}>
                <div className={cx('row')}>
                  <div className={cx('col-sm-12 col-md-12 col-lg-12')}>
                    <div className={cx('form-group')}>
                      <textarea
                        className={cx('form-control')}
                        cols='30'
                        rows='9'
                        placeholder='Write Comment'
                      ></textarea>
                    </div>
                  </div>
                  <div className={cx('col-sm-12 col-md-12 col-lg-6')}>
                    <div className={cx('form-group')}>
                      <input
                        type='text'
                        className={cx('form-control')}
                        placeholder='Name'
                      />
                    </div>
                  </div>
                  <div className={cx('col-sm-12 col-md-12 col-lg-6')}>
                    <div className={cx('form-group')}>
                      <input
                        type='email'
                        className={cx('form-control')}
                        placeholder='Email'
                      />
                    </div>
                  </div>
                  <div className={cx('col-sm-12 col-md-12 col-lg-12')}>
                    <div className={cx('form-group')}>
                      <input
                        type='text'
                        className={cx('form-control')}
                        placeholder='Website'
                      />
                    </div>
                  </div>
                </div>
                <div className={cx('form-group')}>
                  <Button primary>send message</Button>
                </div>
              </form>
            </div>
          </div>
          <AsideMenu />
        </div>
      </div>
    </section>
  );
}

SingleBlog.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SingleBlog;
