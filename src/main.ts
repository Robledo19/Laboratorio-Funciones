const buttonBeforeElement = document.getElementById('button-before');
const buttonAfterElement = document.getElementById('button-after');
const buttonResetElement = document.getElementById('button-reset')
const resetElement = document.getElementById('reset')
const numberElement = document.getElementById('number')
const inputNumberElement = document.getElementById('input-number') as HTMLInputElement;
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
 if(numberElement){
    const newValue = parseInt(inputNumberElement.value)
    if(!isNaN(newValue)){
        counter = newValue
        updateNumber(counter)

    }
 }
}


buttonAfterElement?.addEventListener('click', addNumber)
buttonBeforeElement?.addEventListener('click', lessNumber)
buttonResetElement?.addEventListener('click', ()=> {counter = 0; updateNumber(counter)})
setButtonElement?.addEventListener('click', updateNumberFromInput)



