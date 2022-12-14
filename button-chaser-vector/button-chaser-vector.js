const projectContainer = document.getElementsByClassName("project-container")[0];
const button = document.getElementsByClassName("button-to-chase")[0];
const buttonHeight = button.offsetHeight;
const buttonWidth = button.offsetWidth;
const border = 5;

projectContainer.addEventListener("mousemove", function getDistance(event) {
    var mouseX = event.clientX;
    var mouseY = event.clientY;

    var buttonX = button.offsetLeft + (buttonWidth / 2);
    var buttonY = button.offsetTop + (buttonHeight / 2);
    var vectorX = buttonX - mouseX;
    var vectorY = buttonY - mouseY;

    var distance = Math.sqrt(Math.pow((vectorX), 2) + Math.pow((vectorY), 2));

    if (distance <= 70) {
        button.style.left = `${button.offsetLeft + vectorX}px`;
        button.style.top = `${button.offsetTop + vectorY}px`;
    }

    var buttonLeftSide = button.offsetLeft;
    var buttonRightSide = button.offsetLeft + buttonWidth;
    var buttonTopSide = button.offsetTop;
    var buttonBottomSide = button.offsetTop + buttonHeight;

    var containerLeftSide = projectContainer.offsetLeft + border;
    var containerRightSide = projectContainer.offsetLeft + projectContainer.offsetWidth - border;
    var containerTopSide = projectContainer.offsetTop + border;
    var containerBottomSide = projectContainer.offsetTop + projectContainer.offsetHeight - border;

    var buttonIsLeft = buttonLeftSide <= containerLeftSide;
    var buttonIsRight = buttonRightSide >= containerRightSide;
    var buttonIsTop = buttonTopSide <= containerTopSide;
    var buttonIsBottom = buttonBottomSide >= containerBottomSide;

    var buttonIsTopLeft = buttonIsLeft && buttonIsTop;
    var buttonIsTopRight = buttonIsRight && buttonIsTop;
    var buttonIsBottomLeft = buttonIsLeft && buttonIsBottom;
    var buttonIsBottomRight = buttonIsRight && buttonIsBottom;

    if (buttonIsTopLeft || buttonIsTopRight || buttonIsBottomLeft || buttonIsBottomRight) {
        button.style.left = `${document.body.offsetWidth / 2}px`;
        button.style.top = `${document.body.offsetHeight / 2}px`;
    }
});
