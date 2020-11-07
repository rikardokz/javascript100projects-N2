const span = document.getElementById("hex-container");
const button = document.getElementById("color-change");
const body = document.getElementById("body");

button.addEventListener("click", () => {
    const randomColor = Math.floor(Math.random() * (100000 - 999999) + 999999)
    span.innerHTML = "#" + randomColor;
    body.style.backgroundColor = `#${randomColor}`;
})