function genratePin(){
    const gtnButton = document.getElementById('gen-btn');
    const showPin = document.getElementById('showPin');
    const pinAdded = document.getElementById('pin-added');
    const clearButton = document.getElementById('clear'); 
    const deleteButton = document.getElementById('delete'); 
    const correctPin = document.getElementById('correctPin'); 
    const incorrectPin = document.getElementById('incorrectPin'); 
    const verifyButton = document.getElementById('verifyButton'); 
    const buttons = document.querySelectorAll('.buttons');
    gtnButton.addEventListener('click', () => {
        const randomNumber = Math.random() * 10000;
        const roundNumber = Math.round(randomNumber);
        showPin.innerHTML = roundNumber; 
    })

    buttons.forEach(function(button){
        button.addEventListener('click', (event) => {
            let values = event.target.dataset.num;
            pinAdded.value += values;
        })
    })
    clearButton.addEventListener('click', () => {
        pinAdded.value = "";
    })
    deleteButton.addEventListener('click', () => {
        pinAdded.value = pinAdded.value.slice(0, -1);
    })
    verifyButton.addEventListener('click', () => {
        if(pinAdded.value == showPin.innerHTML){
            correctPin.style.display = "block";
            incorrectPin.style.display = "none";
        }else{
            incorrectPin.style.display = "block";
            correctPin.style.display = "none"
        }
    })

}
genratePin();