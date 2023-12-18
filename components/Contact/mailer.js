import emailjs from "@emailjs/browser";

const serviceId = 'service_y74b5un';
const templateId = 'template_xw94dte';
const userKey = 'NNRph7K4nIFixWVeV';

const mail = ({ name, email, message }) => {
  return emailjs.send(
    serviceId,
    templateId,
    { name, email, message },
    userKey
  );
};

export default mail;
