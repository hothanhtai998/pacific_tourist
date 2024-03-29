import { forwardRef, useState } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import images from '~/assets/images';
import styles from './Image.module.scss';

const Image = forwardRef(
  (
    { src, alt, fallback: customFallback = images.noImage, className, ...prop },
    ref
  ) => {
    const [fallback, setFallback] = useState('');

    const handlerError = () => {
      setFallback(customFallback);
    };

    return (
      <img
        ref={ref}
        src={fallback || src}
        alt={alt}
        className={classNames(styles.wrapper, className)}
        {...prop}
        onError={handlerError}
      />
    );
  }
);

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
};

export default Image;
