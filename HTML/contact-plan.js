import { contactSubject } from './plan-data.js';
const subject = contactSubject(window.location.search);
const message = document.querySelector('#contact-form [name="message"]');
if (subject && message && !message.value) {
  message.value = `Asunto: ${subject}\n\n`;
}