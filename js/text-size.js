document.getElementById('text-size').addEventListener('click', function(){
    const inputPxSize = getInputFieldNumber('text-size');
    textAreaField().style.fontSize = inputPxSize + 'px';
})
document.getElementById('text-size').addEventListener('keyup', function(){
    const inputPxSize = getInputFieldNumber('text-size');
    textAreaField().style.fontSize = inputPxSize + 'px';
})