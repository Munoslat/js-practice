      const picker = document.getElementById("colorPicker");
const box = document.getElementById("colorBox");
const code = document.getElementById("colorCode");

picker.addEventListener("input", function() {
    box.style.backgroundColor = picker.value;
    code.textContent = picker.value; 
});