/* Outside Source Library */
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

/* Inside Source */
import styles from './PostContent.module.scss';
import BackgroundImage from '~/components/BackgroundImage';
import Button from '~/components/Button';
import { Link } from 'react-router-dom';
import routes from '~/config/routes';

const cx = classNames.bind(styles);

function PostContent({ data, database }) {
  const { image, day, month, year, boxTitle, boxCaption } = database;
  return (
    <div className='col col-sm-12 col-md-6 col-lg-4'>
      <div className={cx('col-item')}>
        <BackgroundImage height={300} image={image}>
          <div className={cx('date')}>
            <span className={cx('day')}>{day < 10 ? `0${day}` : day}</span>
            <span>
              <div>{month}</div>
              <div>{year}</div>
            </span>
          </div>
        </BackgroundImage>
        <div className={cx('text-box')}>
          <h3 className={cx('box-title')}>{boxTitle}</h3>
          {data.page !== 'home' && (
            <p className={cx('box-caption')}>{boxCaption}</p>
          )}
          <Button small primary>
            <Link
              onClick={() => window.scrollTo(0, 0)}
              to={routes.singleblog}
              state={database}
            >
              Read more
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

PostContent.propTypes = {
  database: PropTypes.object.isRequired,
};

export default PostContent;
