import emailjs from 'emailjs-com';

export async function sendEmail(formData) {
  return await emailjs.send(
    'service_j5ft7l8',
    'template_wbo982c',
    formData,
    'wegXSo1hPZMcbaPfj'
  );
}
