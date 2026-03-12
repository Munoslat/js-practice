
function changeImage(){
    const Image = document.querySelector(`#Image`);

    const border = prompt(`Enter the border radius of the image :`);
    const fontSize = prompt(`Enter the font size of the image :`);
    Image.style.border = border;
    Image.style.fontSize = fontSize;
    const width = prompt(`Enter the width of the image :`);
    const height = prompt(`Enter the height of the image :`);
    Image.style.width = width;
    Image.style.height = height;
     const url =prompt(`Enter the URL of the image :`);
    Image.src = url;

}
