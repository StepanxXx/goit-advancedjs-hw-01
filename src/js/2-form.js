'use strict';
const form = document.querySelector('.feedback-form');
const formData = { email: '', message: '' };

form.addEventListener('input', onFormInput);
form.addEventListener('submit', onFormSubmit);

populateForm(form, formData);

function onFormInput(event) {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();

  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  form.reset();
  formData.email = '';
  formData.message = '';
}

function populateForm(form, formData) {
  const savedData = localStorage.getItem('feedback-form-state');

  if (savedData) {
    const parsedData = JSON.parse(savedData);
    form.elements.email.value = parsedData.email || '';
    form.elements.message.value = parsedData.message || '';
    formData.email = parsedData.email || '';
    formData.message = parsedData.message || '';
  }
}
