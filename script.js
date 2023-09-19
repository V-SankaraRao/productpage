let img=document.getElementById("image");
let r=document.getElementById("red").value;
let g=document.getElementById("green").value;
let b=document.getElementById("blue").value;

document.addEventListener('DOMContentLoaded', function() {
    const redRadio = document.getElementById('red');
    const greenRadio = document.getElementById('green');
    const blueRadio = document.getElementById('blue');
    
    redRadio.addEventListener('change', function() {
        if (this.checked) {
            img.src="RED.jpg";
        }
    });
    greenRadio.addEventListener('change', function() {
        if (this.checked) {
            img.src="GREEN.jpg";
        }
    });
    blueRadio.addEventListener('change', function() {
        if (this.checked) {
            img.src="BLUE.jpg";
        }
    });
});
