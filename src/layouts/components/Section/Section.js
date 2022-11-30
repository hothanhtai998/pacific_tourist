/* Outside Source Library */
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

/* Inside Source */
import styles from './Section.module.scss';
import '~/assets/styles/grid.css';

const cx = classNames.bind(styles);

function Section({ children }) {
  return (
    <section className={cx('section-area')}>
      <div className='grid wide'>
        <div className='row'>
          <div className='col col-sm-12 col-md-12 col-lg-12'>{children}</div>
        </div>
      </div>
    </section>
  );
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;
