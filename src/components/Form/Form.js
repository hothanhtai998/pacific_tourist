/* Outside Source Library */
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

/* Inside Source */
import styles from './Form.module.scss';
import Input from '~/components/Form/Input';
import TextArea from '~/components/Form/TextArea';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Form({ dataForm }) {
  return (
    <form className={cx('simple-form')} action=''>
      {dataForm.map((data, key) => {
        return (
          <div key={key} className={cx('form-group')}>
            {data.name === 'message' ? (
              <TextArea className={cx('form-control')} data={data} />
            ) : data.name === 'button' ? (
              <Button large primary>
                {data.text}
              </Button>
            ) : (
              <Input className={cx('form-control')} data={data} />
            )}
          </div>
        );
      })}
    </form>
  );
}

Form.propTypes = {
  dataForm: PropTypes.array.isRequired,
};

export default Form;
