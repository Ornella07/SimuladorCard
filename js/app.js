const inputName = document.querySelector('#input-name');
const inputNumber = document.querySelector('#input-number');
const inputMonth = document.querySelector('#input-month');
const inputYear = document.querySelector('#input-year');
const inputCvc = document.querySelector('#input-cvc');
const cardNumber = document.querySelector('#card-number');
const cardName = document.querySelector('#card-name');
const cardMonth = document.querySelector('#card-month');
const cardYear = document.querySelector('#card-year');
const cardCvc = document.querySelector('#card-cvc');
const form =document.querySelector('#form');
const thankYou = document.querySelector('#thank-you')
const btnContinue = document.querySelector('#continue');


inputName.addEventListener('input',() => {
    cardName.innerText = inputName.value;
    
    if(inputName.value.length === 0){
        cardName.innerText = 'Jane Appleseed';
    }
});

var cleave = new Cleave('#input-number', {
    creditCard: true,
});

inputNumber.addEventListener('input',()=>{
    cardNumber.innerText = inputNumber.value;

    if(inputNumber.value.length === 0){
        cardNumber.innerText = '0000 0000 0000 0000';
    }
});

inputMonth.addEventListener('input',()=>{
    cardMonth.innerText = inputMonth.value;

    if(inputMonth.value.length === 0){
        cardMonth.innerText = '00';
    }
});

inputYear.addEventListener('input',()=>{
    cardYear.innerText = inputYear.value;

    if(inputYear.value.length === 0){
        cardYear.innerText = '00';
    }
});

inputCvc.addEventListener('input',()=>{
    cardCvc.innerText = inputCvc.value;

    if(inputCvc.value.length === 0){
        cardCvc.innerText = '000';
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.classList.add('disabled');
    thankYou.classList.remove('disabled');
})

btnContinue.addEventListener('click', () => {
    form.classList.remove('disabled');
    thankYou.classList.add('disabled');
    form.reset();
    cardName.innerText = 'Jane Appleseed';
    cardNumber.innerText = '0000 0000 0000 0000';
    cardMonth.innerText = '00';
    cardYear.innerText = '00';
    cardCvc.innerText = '000';


})