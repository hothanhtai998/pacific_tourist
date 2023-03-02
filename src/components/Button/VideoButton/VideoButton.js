/* Outside Source Library */
import classNames from 'classnames/bind';

/* Inside Source */
import styles from './VideoButton.module.scss';

const cx = classNames.bind(styles);

function VideoButton() {
  return <button className={cx('play-video-btn')}></button>;
}

export default VideoButton;
