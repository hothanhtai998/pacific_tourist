// import outside library
import classNames from 'classnames/bind';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from 'react-router-dom';

// import css
import styles from './Header.module.scss';

//import logo

// import Button

import config from '~/config';

const cx = classNames.bind(styles);

function Header() {
  return (
    <Router>
      <header className={cx('wrapper')}>
        <Routes>
          <div className={cx('container')}>
            {/* Logo */}
            <Link to={config.routes.home}>
              <div className={cx('brand')}></div>
            </Link>
            <NavLink className={cx('navbar')}>
              <ul>
                <li></li>
              </ul>
            </NavLink>
          </div>
        </Routes>
      </header>
    </Router>
  );
}

export default Header;
