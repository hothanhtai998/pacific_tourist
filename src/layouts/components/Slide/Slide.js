/* Outside Source Library */
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

/* Inside Source */
import '~/assets/styles/grid.css';
import styles from './Slide.module.scss';
import Overlay from '~/layouts/components/Overlay';
import HomeSlide from './HomeSlide/HomeSlide';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Slide({ data, className }) {
  const prePage = String(data.prePage).toLowerCase();
  const curPage = String(data.curPage).toLowerCase();
  const { img } = data;
  const styles = {
    backgroundImage: `url(${img})`,
  };
  return (
    <div style={styles} className={cx('slide-area', className)}>
      <Overlay />
      <div className='grid wide'>
        <div className={cx('row')}>
          <div className={cx('col-sm-12 col-md-12 col-lg-12')}>
            {curPage === 'home' ? (
              <HomeSlide className='container' data={data} />
            ) : (
              <div className={cx('row', 'container')}>
                <div className={cx('col-sm-12 col-md-12 col-lg-12')}>
                  <div className={cx('breadcrumbs')}>
                    <Link
                      onClick={() => window.scrollTo(0, 0)}
                      to={prePage === 'home' ? '/' : `/${prePage}`}
                    >
                      {prePage} &gt;
                    </Link>
                    <span>{curPage} &gt;</span>
                  </div>
                </div>
                <div className={cx('col-sm-12 col-md-12 col-lg-12')}>
                  <h1 className={cx('page')}>{curPage}</h1>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

Slide.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Slide;
