// import outside library
import classNames from 'classnames/bind';

// import css
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Header() {
  return <footer className={cx('wrapper')}></footer>;
}

export default Header;
