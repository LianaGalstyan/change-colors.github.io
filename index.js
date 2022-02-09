let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let btn4 = document.querySelector(".btn4");
let square = document.querySelectorAll(".square");

const colors = ["pink", "green", "orange", "blue"];

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}

for (let i = 0; i < square.length; i++) {
    console.log(i)
} 

btn1.addEventListener('click',function onClick() {
    square[0].style.backgroundColor = colors[getRandomNumber()];
});
btn2.addEventListener('click',function onClick() {
    square[1].style.backgroundColor = colors[getRandomNumber()];
});
btn3.addEventListener('click',function onClick() {
    square[2].style.backgroundColor = colors[getRandomNumber()];
});
btn4.addEventListener('click',function onClick() {
    square[3].style.backgroundColor = colors[getRandomNumber()];
});
