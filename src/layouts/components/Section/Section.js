/* Outside Source Library */
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

/* Inside Source */
import styles from './Section.module.scss';
import '~/assets/styles/grid.css';
import BackgroundImage from '~/components/BackgroundImage';

const cx = classNames.bind(styles);

function Section({ image, padtb, children, className }) {
  let Background = BackgroundImage;
  if (image === undefined) {
    Background = 'section';
  }
  return (
    <Background
      padtb={padtb}
      image={image}
      className={cx('section-area', `${className ? className : ''}`)}
    >
      <div className='grid wide'>{children}</div>
    </Background>
  );
}

Section.propTypes = {
  image: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Section;
