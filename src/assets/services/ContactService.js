import emailjs from 'emailjs-com';

export async function sendEmail(formData) {
const userId = process.env.REACT_APP_EMAILJS_USER_ID;
const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  return await emailjs.send(
    serviceId,
    templateId,
    formData,
    userId
  );
}
