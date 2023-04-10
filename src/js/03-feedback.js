import throttle from 'lodash.throttle';

const obj = {
  email: document.querySelector('[name="email"]'),
  textarea: document.querySelector('[name="message"]'),
  form: document.querySelector('form'),
};

let feedbackData =
  JSON.parse(localStorage.getItem('feedback-form-state')) ?? {};

function recoverData() {
  obj.email.value = feedbackData.email ?? '';
  obj.textarea.value = feedbackData.message ?? '';
}
recoverData();

const updateFeedbackData = event => {
  feedbackData[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(feedbackData));
};
const onFormSubmitting = event => {
  event.preventDefault();

  if (feedbackData.email === undefined || feedbackData.message === undefined) {
    alert('Будь ласка, заповніть всі поля');
    return;
  }

  console.log('Email:', feedbackData.email);
  console.log('Message:', feedbackData.message);

  localStorage.removeItem('feedback-form-state');
  event.currentTarget.reset();
  feedbackData = {};
};

obj.form.addEventListener('input', throttle(updateFeedbackData, 500));
obj.form.addEventListener('submit', onFormSubmitting);
