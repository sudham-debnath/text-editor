document.getElementById('btn-save').addEventListener('click', function(){
    const titleInput = findInputValue('title-input');
    const modalTitleText = document.getElementById('modal-title');
    modalTitleText.innerText = titleInput;

    const titleInput2 = findInputValue('text-area');
    const modalTitleText2 = document.getElementById('modal-text');
    modalTitleText2.innerText = titleInput2;
})