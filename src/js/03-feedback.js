import throttle from "lodash.throttle";

const formEl = document.querySelector('.feedback-form');
let storageObj = {
    email: '',
    message: '',
}

if (localStorage.getItem('form')) {
    storageObj = { ...JSON.parse(localStorage.getItem('form')) }; 
}

formEl.elements.email.value = storageObj.email;
formEl.elements.message.value = storageObj.message;

formEl.addEventListener('input', throttle(saveForm,500));
formEl.addEventListener('submit', submitForm);

function saveForm (e) {
    e.preventDefault();
    storageObj[e.target.name] = e.target.value;
    localStorage.setItem('form', JSON.stringify(storageObj));
};

function submitForm (e) {
  e.preventDefault();
  const {
    elements: { email, message }
  } = e.currentTarget;

  if (email.value === '' || message.value === '') {
    return alert('Please fill in all the fields!');
    }
    console.log(storageObj);
    localStorage.removeItem('form');
    storageObj = {
        email: '',
        message: '',
    }
  e.currentTarget.reset();
}
