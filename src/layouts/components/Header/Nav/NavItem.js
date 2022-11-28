import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Nav.module.scss';

const cx = classNames.bind(styles);

function NavItem({ to, title }) {
  return (
    <NavLink
      className={(nav) => cx('nav-item', { active: nav.isActive })}
      to={to}
    >
      {title}
    </NavLink>
  );
}

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default NavItem;
