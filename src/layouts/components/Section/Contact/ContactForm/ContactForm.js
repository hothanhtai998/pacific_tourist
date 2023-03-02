/* Outside Source Library */
import PropTypes from 'prop-types';

import Form from '~/components/Form';

function ContactForm({ dataForm }) {
  return (
    <div className='mt-3 row'>
      <div className='col col-sm-6 col-md-6 col-lg-6'></div>
      <div className='col col-sm-12 col-md-6 col-lg-6'>
        <Form dataForm={dataForm} />
      </div>
    </div>
  );
}

ContactForm.propTypes = {
  dataForm: PropTypes.array.isRequired,
};

export default ContactForm;
