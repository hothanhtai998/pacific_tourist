import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import styles from './NavBar.module.scss';
import NavItem from './NavItem';
import config from '~/config';

const cx = classNames.bind(styles);
function NavBar({ className }) {
  const [click, setClick] = useState(true);

  const handlerClick = () => {
    // setClick((pre) => !pre);
    // console.log('hash change');
  };

  useEffect(() => {
    // console.log(click);
    window.addEventListener('load', handlerClick);

    return () => {
      window.removeEventListener('load', handlerClick);
    };
  });

  return (
    <nav className={click ? cx('nav', className) : cx('nav')}>
      <NavItem to={config.routes.home} title='home'></NavItem>
      <NavItem to={config.routes.about} title='about'></NavItem>
      <NavItem to={config.routes.destination} title='destination'></NavItem>
      <NavItem to={config.routes.hotel} title='hotel'></NavItem>
      <NavItem to={config.routes.blog} title='blog'></NavItem>
      <NavItem to={config.routes.contact} title='contact'></NavItem>
    </nav>
  );
}

export default NavBar;
