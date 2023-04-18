const counterTitleEl = document.querySelector('.counter__title')
const counterEl = document.querySelector('.counter')
const counterResetButtonEl = document.querySelector('.counter__reset-button')
const increaseButtonEl = document.querySelector('.counter__button--increase')
const decreaseButtonEl = document.querySelector('.counter__button--decrease')
const counterValueEl = document.querySelector('.counter__value')


function incrementCounter(){
    // get current value
    const currentValue = counterValueEl.textContent
    const currentValueInt = +currentValue
    //set counter
    if(currentValueInt < 5)
     counterValueEl.textContent = currentValueInt + 1
    else{
        increaseButtonEl.disabled = true;
        decreaseButtonEl.disabled = true;
        counterTitleEl.textContent = "LIMIT! BUY PRO FOR > 5";
        counterEl.classList.add('counter__limit');
    }
}

function decrementCounter(){
    // get current value
    const currentValue = counterValueEl.textContent
    const currentValueInt = +currentValue
    //set counter
    if(currentValueInt > 0)
        counterValueEl.textContent = currentValueInt - 1
}

function  resetCounter(){

}

increaseButtonEl.addEventListener('click', incrementCounter)
decreaseButtonEl.addEventListener('click', decrementCounter)
counterResetButtonEl.addEventListener('click', function (){
    counterValueEl.textContent = "0"
    counterTitleEl.textContent = "Fancy Counter"
    counterEl.classList.remove('counter__limit')
    increaseButtonEl.disabled = false;
    decreaseButtonEl.disabled = false;

})