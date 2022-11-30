/* Outside Source Library */
import classNames from 'classnames/bind';

/* Inside Source */
import styles from './Overlay.module.scss';

const cx = classNames.bind(styles);

function Overlay() {
  return <div className={cx('overlay')}></div>;
}

export default Overlay;
