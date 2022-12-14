// import outside library
import classNames from 'classnames/bind';

import { Link } from 'react-router-dom';

// import css
import '~/assets/styles/grid.css';

import styles from './Header.module.scss';

import config from '~/config';
import { Nav, NavItem } from './Nav';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('container')}>
        <Link to={config.routes.home} className={cx('brand')}>
          Pacific
          <span>Travel Agency</span>
        </Link>
        <Button className={cx('nav-menu')}>Menu</Button>
        <Nav>
          <NavItem to={config.routes.home} title='home'></NavItem>
          <NavItem to={config.routes.about} title='about'></NavItem>
          <NavItem to={config.routes.destination} title='destination'></NavItem>
          <NavItem to={config.routes.hotel} title='hotel'></NavItem>
          <NavItem to={config.routes.blog} title='blog'></NavItem>
          <NavItem to={config.routes.contact} title='contact'></NavItem>
        </Nav>
      </div>
    </header>
  );
}

export default Header;
