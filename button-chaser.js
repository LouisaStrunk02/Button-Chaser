var button = document.getElementsByClassName("button-container")[0];

button.addEventListener("mouseover", function moveButton(event) {
    var mousePosX = event.clientX;
    var mousePosY = event.clientY;
    const buttonPosX = button.offsetLeft;
    const buttonPosY = button.offsetTop;

    var mouseIsLeft = mousePosX <= buttonPosX;
    var mouseIsRight = mousePosX >= buttonPosX;
    var mouseIsUp = mousePosY <= buttonPosY;
    var mouseIsDown = mousePosY >= buttonPosY;

    var mouseIsLeftUp = mouseIsLeft && mouseIsUp;
    var mouseIsRightUp = mouseIsRight && mouseIsUp;
    var mouseIsLeftDown = mouseIsLeft && mouseIsDown;
    var mouseIsRightDown = mouseIsRight && mouseIsDown;

    if (mouseIsLeftUp) {
        button.style.left = `${buttonPosX + 40}px`;
        button.style.top = `${buttonPosY + 40}px`;
        return;
    }
    if (mouseIsRightUp) {
        button.style.left = `${buttonPosX - 40}px`;
        button.style.top = `${buttonPosY + 40}px`;
        return;
    }
    if (mouseIsLeftDown) {
        button.style.left = `${buttonPosX + 40}px`;
        button.style.top = `${buttonPosY - 40}px`;
        return;
    }
    if (mouseIsRightDown) {
        button.style.left = `${buttonPosX - 40}px`;
        button.style.top = `${buttonPosY - 40}px`;
        return;
    }

});
