const changeButton = document.getElementById("changeButton");

// changeButton.addEventListener('click', switchBackground);

function randomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    const color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}

function switchBackground() {
    let backgroundColor = randomColor();
    document.body.style.backgroundColor = backgroundColor;
}

