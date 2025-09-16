// const greenBtn = document.getElementById("green-btn");
// const redBtn = document.getElementById("red-btn");
// const blueBtn = document.getElementById("blue-btn");
// const randomBtn = document.getElementById("random-btn");

// greenBtn.addEventListener("click", function() {
//     document.body.style.backgroundColor = "green";
// })

// redBtn.addEventListener("click", function() {
//     document.body.style.backgroundColor = "red";
// })

// blueBtn.addEventListener("click", function() {
//     document.body.style.backgroundColor = "blue";
// })

// randomBtn.addEventListener("click", function() {
//     document.body.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
// })

const hexCode = document.getElementById("hex-code")

function setColor(color) {
    document.body.style.backgroundColor = color;
    hexCode.textContent = color
}

function setRandomColor() {
    document.body.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    hexCode.textContent = document.body.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
}

