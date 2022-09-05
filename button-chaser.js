var button = document.getElementsByClassName("button-container")[0];

button.addEventListener("mouseover", function moveButton(event) {
    var mousePosX = event.clientX;
    const buttonPosX = button.offsetLeft;

    var mouseIsLeft = mousePosX <= buttonPosX;

    if (mouseIsLeft) {
        button.style.left = `${button.offsetLeft + 30}px`;
    }
    else {
        button.style.left = `${button.offsetLeft - 30}px`;
    }
});
