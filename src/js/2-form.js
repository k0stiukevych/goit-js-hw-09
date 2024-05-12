const LocalKey = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const { email, message } = form.elements;

function saveFormData() {
  const formData = {
    email: email.value.trim(),
    message: message.value.trim(),
  };
  localStorage.setItem(LocalKey, JSON.stringify(formData));
}

function loadFormData() {
  const savedData = localStorage.getItem(LocalKey);
  if (savedData) {
    const formData = JSON.parse(savedData);
    email.value = formData.email;
    message.value = formData.message;
  }
}

loadFormData();

form.addEventListener('input', () => {
  saveFormData();
});

form.addEventListener('submit', event => {
  event.preventDefault();
  if (email.value.trim() === '' || message.value.trim() === '') {
    alert('Fill please all fields!');
    return;
  }
  console.log({
    email: email.value.trim(),
    message: message.value.trim(),
  });

  localStorage.removeItem(LocalKey);
  email.value = '';
  message.value = '';
});