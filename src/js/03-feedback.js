import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('input'),
    textarea: document.querySelector('textarea')
};

const STORAGE_KEY = "feedback-form-state";

let formData = {};

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

populateTextForm();

function onFormInput(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

function onFormSubmit(event) {
    event.preventDefault();
    localStorage.removeItem(STORAGE_KEY);
    event.currentTarget.reset();

    console.log(`Email: ${formData.email}`);
    console.log(`Message: ${formData.message}`);
};

function populateTextForm() {
    // const saveMsg = localStorage.getItem(STORAGE_KEY);
    // const outputTxt = JSON.parse(saveMsg);
    const saveMsg = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (saveMsg === null) {

        return;
    }
        refs.email.value = saveMsg.email ?? '';
        refs.textarea.value = saveMsg.message ?? '';
  
    // refs.email.value = outputTxt?.email ?? '';
    // refs.textarea.value = outputTxt?.message ?? '';
    

//     formData = {
//         email: outputTxt.email,
//         message: outputTxt.message
//         // email: outputTxt?.email,
//         // message: outputTxt?.message
//     }
};