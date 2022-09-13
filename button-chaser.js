var buttonContainer = document.getElementsByClassName("button-container")[0];
var button = document.getElementsByClassName("button-to-chase")[0];

buttonContainer.addEventListener("mouseover", function moveButton(event) {
    var mousePosX = event.clientX;
    var mousePosY = event.clientY;

    var buttonHeight = button.offsetHeight;
    var buttonWidth = button.offsetWidth;

    var buttonLeft = buttonContainer.offsetLeft + button.offsetLeft;
    var buttonRight = buttonLeft + buttonWidth;
    var buttonTop = buttonContainer.offsetTop + button.offsetTop;
    var buttonBottom = buttonTop + buttonHeight;

    var mouseIsLeft = mousePosX <= buttonLeft && mousePosY >= buttonTop && mousePosY <= buttonBottom;
    var mouseIsRight = mousePosX >= buttonRight && mousePosY >= buttonTop && mousePosY <= buttonBottom;
    var mouseIsUp = mousePosX >= buttonLeft && mousePosX <= buttonRight && mousePosY <= buttonTop;
    var mouseIsDown = mousePosX >= buttonLeft && mousePosX <= buttonRight && mousePosY >= buttonBottom;

    var mouseIsLeftUp = mousePosX <= buttonLeft && mousePosY <= buttonTop;
    var mouseIsRightUp = mousePosX >= buttonRight && mousePosY <= buttonTop;
    var mouseIsLeftDown = mousePosX <= buttonLeft && mousePosY >= buttonBottom;
    var mouseIsRightDown = mousePosX >= buttonRight && mousePosY >= buttonBottom;

    if (mouseIsLeft) {
        buttonContainer.style.left = `${buttonContainer.offsetLeft + 40}px`;
        return;
    }
    if (mouseIsRight) {
        buttonContainer.style.left = `${buttonContainer.offsetLeft - 40}px`;
        return;
    }
    if (mouseIsUp) {
        buttonContainer.style.top = `${buttonContainer.offsetTop + 40}px`;
        return;
    }
    if (mouseIsDown) {
        buttonContainer.style.top = `${buttonContainer.offsetTop - 40}px`;
        return;
    }
    if (mouseIsLeftUp) {
        buttonContainer.style.left = `${buttonContainer.offsetLeft + 40}px`;
        buttonContainer.style.top = `${buttonContainer.offsetTop + 40}px`;
        return;
    }
    if (mouseIsRightUp) {
        buttonContainer.style.left = `${buttonContainer.offsetLeft - 40}px`;
        buttonContainer.style.top = `${buttonContainer.offsetTop + 40}px`;
        return;
    }
    if (mouseIsLeftDown) {
        buttonContainer.style.left = `${buttonContainer.offsetLeft + 40}px`;
        buttonContainer.style.top = `${buttonContainer.offsetTop - 40}px`;
        return;
    }
    if (mouseIsRightDown) {
        buttonContainer.style.left = `${buttonContainer.offsetLeft - 40}px`;
        buttonContainer.style.top = `${buttonContainer.offsetTop - 40}px`;
        return;
    }
});

button.addEventListener("mouseover", function goToMiddle() {
    buttonContainer.style.left = `${document.body.offsetWidth / 2}px`;
    buttonContainer.style.top = `${document.body.offsetHeight / 2}px`;
});
