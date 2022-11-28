/* Outside Source Library */
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

/* Inside Source */
import styles from './Slide.module.scss';
import { Image } from '~/components/Image';

const cx = classNames.bind(styles);

function Slide({ data }) {
  const { img, alt } = data;
  console.log(img);
  return (
    <div className={cx('slide-area')}>
      <div className={cx('overlay')}></div>
      <div className={cx('container')}></div>
      <Image src={img} alt={alt} />
    </div>
  );
}

Slide.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Slide;
