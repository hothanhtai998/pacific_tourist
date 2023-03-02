/* Outside Source Library */

/* Inside Source */
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

const contactInfo = {
  address: '198 West 21th Street, Suite 721 New York NY 10016',
  phone: '1235 2355 98',
  email: 'info@yoursite.com',
  website: 'your-site.com',
};

const contactForm = [
  {
    type: 'text',
    name: 'first name',
    placeholder: 'first name',
  },
  {
    type: 'text',
    name: 'last name',
    placeholder: 'last name',
  },
  {
    type: 'email',
    name: 'email',
    placeholder: 'your e-mail',
  },
  {
    type: 'text',
    name: 'subject',
    placeholder: 'subject',
  },
  {
    name: 'message',
    placeholder: 'message',
    colNumber: 30,
    rowNumber: 7,
  },
  {
    name: 'button',
    text: 'send message',
  },
];

function Contact() {
  return (
    <>
      <ContactInfo dataInfo={contactInfo} />
      <ContactForm dataForm={contactForm} />
    </>
  );
}

export default Contact;
