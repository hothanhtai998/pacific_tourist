/* Outside Source Library */
import classNames from 'classnames/bind';

/* Inside Source */
import styles from './Introduce.module.scss';
import BackgroundImage from '~/components/BackgroundImage';
import Overlay from '~/layouts/components/Overlay';
import Button from '~/components/Button';
import images from '~/assets/images';
const cx = classNames.bind(styles);

const introduceData = {
  img: images.introduce,
  title:
    'We can manage your dream building A small river named Duden flows by their place',
  subTitle: 'we are pacific a travel agency',
  captions: [],
};

function Introduce() {
  const { img, subTitle, title } = introduceData;
  return (
    <div className='row'>
      <div className='col col-sm-12 col-md-12 col-lg-12'>
        <BackgroundImage height={250} image={img}>
          <div className={cx('col-item')}>
            <Overlay className='overlay-2' />
            <h2>{subTitle}</h2>
            <p>{title}</p>
            <span>
              <Button large primary>
                Ask for a quote
              </Button>
            </span>
          </div>
        </BackgroundImage>
      </div>
    </div>
  );
}

export default Introduce;
