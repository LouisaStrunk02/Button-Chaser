function moveButton(classname) {
    var buttonContainer = document.getElementsByClassName(classname)[0];

    var mousePosX = event.clientX;
    var mousePosY = event.clientY;
    const buttonPosX = buttonContainer.offsetLeft;
    const buttonPosY = buttonContainer.offsetTop;

    var mouseIsLeft = mousePosX <= buttonPosX;
    var mouseIsRight = mousePosX >= buttonPosX;
    var mouseIsUp = mousePosY <= buttonPosY;
    var mouseIsDown = mousePosY >= buttonPosY;

    var mouseIsLeftUp = mouseIsLeft && mouseIsUp;
    var mouseIsRightUp = mouseIsRight && mouseIsUp;
    var mouseIsLeftDown = mouseIsLeft && mouseIsDown;
    var mouseIsRightDown = mouseIsRight && mouseIsDown;

    if (mouseIsLeftUp) {
        buttonContainer.style.left = `${buttonPosX + 40}px`;
        buttonContainer.style.top = `${buttonPosY + 40}px`;
        return;
    }
    if (mouseIsRightUp) {
        buttonContainer.style.left = `${buttonPosX - 40}px`;
        buttonContainer.style.top = `${buttonPosY + 40}px`;
        return;
    }
    if (mouseIsLeftDown) {
        buttonContainer.style.left = `${buttonPosX + 40}px`;
        buttonContainer.style.top = `${buttonPosY - 40}px`;
        return;
    }
    if (mouseIsRightDown) {
        buttonContainer.style.left = `${buttonPosX - 40}px`;
        buttonContainer.style.top = `${buttonPosY - 40}px`;
        return;
    }

}

function goToMiddle(classname) {
    var button = document.getElementsByClassName(classname)[0];

    button.style.left = `${document.body.offsetWidth / 2}px`;
    button.style.top = `${document.body.offsetHeight / 2}px`;
}

document.getElementsByClassName("button-container")[0].onmouseover = () => moveButton("button-container");
document.getElementsByClassName("button-to-chase")[0].onmouseover = () => goToMiddle("button-container");
