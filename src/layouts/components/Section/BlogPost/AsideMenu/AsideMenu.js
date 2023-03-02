/* Outside Source Library */
import classNames from 'classnames/bind';

/* Inside Source */
import styles from './AsideMenu.module.scss';
import Button from '~/components/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function AsideMenu() {
  const [searchKeyWorld, setSearchKeyWorld] = useState('Search Keywords');
  const [searchEmail, setSearchEmail] = useState('Search Email');
  return (
    <div className={cx('col col-sm-12 col-md-12 col-lg-4')}>
      <div className={cx('blog-right-sidebar')}>
        <aside className={cx('single-sidebar', 'search-sidebar')}>
          <form action='#'>
            <div className={cx('form-group')}>
              <div className={cx('input-group')}>
                <input
                  onBlur={() => setSearchKeyWorld('Search Keywords')}
                  onFocus={() => setSearchKeyWorld('')}
                  type='text'
                  className={cx('form-control')}
                  placeholder={searchKeyWorld}
                />
              </div>
            </div>
            <Button className={cx('full-width')} primary>
              search
            </Button>
          </form>
        </aside>
        <aside className={cx('single-sidebar', 'post-category')}>
          <h4 className={cx('sidebar-title')}>Category</h4>
          <ul className={cx('category-list')}>
            <li>
              <Link>
                <p>Resaurant food</p>
              </Link>
            </li>
            <li>
              <Link>
                <p>Travel news</p>
              </Link>
            </li>
            <li>
              <Link>
                <p>Modern technology</p>
              </Link>
            </li>
            <li>
              <Link>
                <p>Product</p>
              </Link>
            </li>
            <li>
              <Link>
                <p>Inspiration</p>
              </Link>
            </li>
            <li>
              <Link>
                <p>Health Care</p>
              </Link>
            </li>
          </ul>
        </aside>
        {/* <aside className={cx('single-sidebar', 'popular-post')}>
          <h4 className={cx('sidebar-title')}>Recent post</h4>
        </aside> */}
        <aside className={cx('single-sidebar', 'tag-cloud')}>
          <h4 className={cx('sidebar-title')}>Tag</h4>
          <ul>
            <li>
              <Link>project</Link>
            </li>
            <li>
              <Link>love</Link>
            </li>
            <li>
              <Link>technology</Link>
            </li>
            <li>
              <Link>travel</Link>
            </li>
            <li>
              <Link>restaurant</Link>
            </li>
            <li>
              <Link>life style</Link>
            </li>
            <li>
              <Link>design</Link>
            </li>
            <li>
              <Link>illustration</Link>
            </li>
          </ul>
        </aside>
        <aside className={cx('single-sidebar', 'instagram-feed')}>
          <h4 className={cx('sidebar-title')}>Instagram feed</h4>
          <ul className={cx('instagram-row')}>
            {images.instagramImage.map((image, key) => {
              return (
                <li key={key}>
                  <Link>
                    <Image className={cx('image-fluid')} src={image} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </aside>
        <aside className={cx('single-sidebar', 'newsletter')}>
          <h4 className={cx('sidebar-title')}>Newsletter</h4>
          <form action='#'>
            <div className={cx('form-group')}>
              <div className={cx('input-group')}>
                <input
                  onBlur={() => setSearchEmail('Search Email')}
                  onFocus={() => setSearchEmail('')}
                  type='text'
                  className={cx('form-control')}
                  placeholder={searchEmail}
                />
              </div>
            </div>
            <Button className={cx('full-width')} primary>
              subscribe
            </Button>
          </form>
        </aside>
      </div>
    </div>
  );
}

export default AsideMenu;
