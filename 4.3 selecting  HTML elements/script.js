

let inputBox = document.getElementById('inputbox');
let inputButton = document.getElementById('inputbutton');
let list = document.getElementById('list');

inputButton.addEventListener('click', () => {
    console.log(inputBox.value); 
    list.innerHTML=inputBox.value;
    inputBox.focus();
    inputBox.value ='';

});



