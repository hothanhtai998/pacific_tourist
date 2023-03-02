/* Outside Source Library */
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

/* Inside Source */
import styles from './ServiceImage.module.scss';

const cx = classNames.bind(styles);

function ServiceImage({ data }) {
  const style = {
    backgroundImage: `url(${data.image})`,
  };

  return (
    <div className='col col-sm-12 col-md-6 col-lg-6'>
      <div style={style} className={cx('col-item', `color-${data.color}`)}>
        <div className={cx('iconBox')}>
          <span className={cx('icon', data.className)}></span>
        </div>
        <>
          <h3>{data.title}</h3>
          <p>{data.caption}</p>
        </>
      </div>
    </div>
  );
}

ServiceImage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ServiceImage;
