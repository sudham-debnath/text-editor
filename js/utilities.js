function getInputFieldNumber(inputId){
    const inputField = document.getElementById(inputId);
    const inputTextString = inputField.value;
    const inputNumber = parseInt(inputTextString);
    return inputNumber;
}
// Input field text styles function;
function textAreaField(){
    const contentField = document.getElementById('text-area');
    return contentField;
}

function findInputValue(inputId){
    const inputText = document.getElementById(inputId);
    return inputText.value;
}
function findInnerText(inputId){
    const inputText = document.getElementById(inputId);
    return inputText.innerText;
}