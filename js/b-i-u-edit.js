// bold text
document.getElementById('bold-text').addEventListener('click', function(){
        if (textAreaField().style.fontWeight === "700") {
            textAreaField().style.fontWeight = "400";
        } else {
            textAreaField().style.fontWeight = '700';
        }
})
document.getElementById('italic-text').addEventListener('click', function(){
    if (textAreaField().style.fontStyle === "italic") {
        textAreaField().style.fontStyle = "normal";
    } else {
        textAreaField().style.fontStyle = 'italic';
    }
})
document.getElementById('underline-text').addEventListener('click', function(){
    if (textAreaField().style.textDecoration === "underline") {
        textAreaField().style.textDecoration = "none";
    } else {
        textAreaField().style.textDecoration = 'underline';
    }
})
// Uppercase and lowercase
document.getElementById('uppercase-lowercase').addEventListener('click', function(){
    if (textAreaField().style.textTransform === "uppercase") {
        textAreaField().style.textTransform = "lowercase";
    } else {
        textAreaField().style.textTransform = 'uppercase';
    }
})