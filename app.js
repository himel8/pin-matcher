function getPin(){
    const pin = Math.round(Math.random()*1000000);
    const pinString = pin + '';
    if(pinString.length == 6){
        console.log(pin)
        return pin;
    }
    else{
        return getPin();
    }
}


const generateBtn = document.getElementById('generate-btn');
generateBtn.addEventListener('click', function(){
    const generateDisplay = document.getElementById('generate-display');
    generateDisplay.value = getPin();
})


const btnId = document.getElementById('button-id');
btnId.addEventListener('click', function(event){
    const NumberInput = document.getElementById('number-input');
    let peviousNumber = NumberInput.value;
    const number = event.target.innerText;
    if(isNaN(number)){
        if(number == 'AC'){
            NumberInput.value = '';
            console.log(number);
            document.getElementById('section-bg').style.backgroundColor = '#10101B';
            document.getElementById('generate-display').value = '';
        }
        else{
            
        }
    }
    else{
        const newNumber = peviousNumber + number;
        const newNumberString = newNumber +'';
        if(newNumberString.length <= 6){
            NumberInput.value = newNumber;
        }
        
    }

})


const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', function(){
    const matchNumber = document.getElementById('number-input').value;
    const matchPin = document.getElementById('generate-display').value;
    console.log(matchNumber, matchPin)
    if(matchPin == matchNumber){
        document.getElementById('success-btn').style.display = 'block';
        document.getElementById('fail-btn').style.display = 'none';
        document.getElementById('section-bg').style.backgroundColor = 'green';
    }
    else{
        document.getElementById('success-btn').style.display = 'none';
        document.getElementById('fail-btn').style.display = 'block';
        document.getElementById('section-bg').style.backgroundColor = 'red';
    }

    matchNumber.value = '';
})
