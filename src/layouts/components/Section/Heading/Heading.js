/* Outside Source Library */
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

/* Inside Source */
import styles from './Heading.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Heading({ data, className }) {
  const { subTitle, title, captions, buttonText } = data;
  const mBot = captions.length > 0 ? 0 : 60;
  return (
    <div style={{ marginBottom: mBot }} className={cx('col-item')}>
      <span className={cx('sub-title', className)}>{subTitle}</span>
      <h2 className={cx('title', className)}>{title}</h2>
      {captions.length > 0 &&
        captions.map((caps, key) => {
          return (
            <p key={key} className={cx('caption')}>
              {caps}
            </p>
          );
        })}
      {captions.length > 0 && (
        <Button to={'/destination'} primary>
          {buttonText}
        </Button>
      )}
    </div>
  );
}

Heading.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Heading;
