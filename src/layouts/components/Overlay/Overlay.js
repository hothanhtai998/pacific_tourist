/* Outside Source Library */
import classNames from 'classnames/bind';

/* Inside Source */
import styles from './Overlay.module.scss';

const cx = classNames.bind(styles);

function Overlay({ className = 'overlay' }) {
  return <div className={cx(className)}></div>;
}

export default Overlay;
