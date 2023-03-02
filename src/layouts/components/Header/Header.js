// import outside library
import classNames from 'classnames/bind';

import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import css

import styles from './Header.module.scss';
import { NavBar } from './NavBar';

import config from '~/config';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [navButton, setNavButton] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 400) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const handlerNavButton = () => {
    setNavButton((pre) => !pre);
  };

  let navbarClasses;
  if (scrolled) {
    navbarClasses = 'scrolled';
  }

  return (
    <header className={cx('wrapper', navbarClasses)}>
      <div className={cx('grid wide')}>
        <div className={cx('row', 'align-center')}>
          <div className={cx('col col-sm-4 col-md-4 col-lg-2')}>
            <Link to={config.routes.home} className={cx('brand')}>
              Pacific
              <span>Travel Agency</span>
            </Link>
          </div>
          <div className={cx('col col-sm-8 col-md-8 col-lg-10')}>
            <Button onClick={handlerNavButton} className={cx('nav-menu')}>
              Menu
            </Button>
            {window.matchMedia('(min-width: 768px)').matches ? (
              <NavBar />
            ) : (
              navButton && <NavBar className='menu' />
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
