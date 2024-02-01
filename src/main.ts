const buttonBeforeElement = document.getElementById('button-before');
const buttonAfterElement = document.getElementById('button-after');
const buttonResetElement = document.getElementById('button-reset')
const resetElement = document.getElementById('reset')
const numberElement = document.getElementById('number')
const inputNumberElement = document.getElementById('input-number')
const setButtonElement = document.getElementById('set-button')
let counter = 0;


const updateNumber = (value:number) =>{
    const newCounter = value.toString().padStart(2, '0')
    if(numberElement) numberElement.textContent = newCounter
}

const addNumber = () =>{
    console.log(counter)
    counter++;
    updateNumber(counter)

}

const lessNumber = () =>{
    if(counter > 0){
        console.log(counter)
        counter--;
        updateNumber(counter)
    }
}

const updateNumberFromInput = () => {
    if (numberElement && inputNumberElement instanceof HTMLInputElement) {
        const newValue = parseInt(inputNumberElement.value)
    if(!isNaN(newValue)){
        counter = newValue
        updateNumber(counter)

    }
 }
}


if (buttonAfterElement instanceof HTMLButtonElement) {
    buttonAfterElement.addEventListener('click', addNumber);
}

if (buttonBeforeElement instanceof HTMLButtonElement) {
    buttonBeforeElement.addEventListener('click', lessNumber);
}

if (buttonResetElement instanceof HTMLButtonElement) {
    buttonResetElement.addEventListener('click', () => {
        counter = 0;
        updateNumber(counter);
    });
}

if (setButtonElement instanceof HTMLButtonElement) {
    setButtonElement.addEventListener('click', updateNumberFromInput);
}


