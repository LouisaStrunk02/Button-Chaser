const projectContainer = document.getElementsByClassName("project-container")[0];
const button = document.getElementsByClassName("button-to-chase")[0];
const border = 5;

projectContainer.addEventListener("mousemove", function getDistance(event) {
    var mouseX = event.clientX;
    var mouseY = event.clientY;

    const buttonHeight = button.offsetHeight;
    const buttonWidth = button.offsetWidth;
    var buttonX = button.offsetLeft + (buttonWidth / 2);
    var buttonY = button.offsetTop + (buttonHeight / 2);
    var vectorX = buttonX - mouseX;
    var vectorY = buttonY - mouseY;

    var distance = Math.sqrt(Math.pow((vectorX), 2) + Math.pow((vectorY), 2));

    if (distance <= 70) {
        button.style.left = `${button.offsetLeft + vectorX}px`;
        button.style.top = `${button.offsetTop + vectorY}px`;
    }

    var buttonIsTopLeft = button.offsetLeft <= (projectContainer.offsetLeft + border) && button.offsetTop <= (projectContainer.offsetTop + border);
    var buttonIsTopRight = (button.offsetLeft + button.offsetWidth) >= (projectContainer.offsetTop + projectContainer.offsetWidth - border) && button.offsetTop <= (projectContainer.offsetTop + border);
    var buttonIsBottomLeft = button.offsetLeft <= (projectContainer.offsetLeft + border) && (button.offsetTop + button.offsetHeight) >= (projectContainer.offsetTop + projectContainer.offsetHeight - border);
    var buttonIsBottomRight = (button.offsetLeft + button.offsetWidth) >= (projectContainer.offsetTop + projectContainer.offsetWidth - border) && (button.offsetTop + button.offsetHeight) >= (projectContainer.offsetTop + projectContainer.offsetHeight - border);

    if (buttonIsTopLeft || buttonIsTopRight || buttonIsBottomLeft || buttonIsBottomRight) {
        button.style.left = `${document.body.offsetWidth / 2}px`;
        button.style.top = `${document.body.offsetHeight / 2}px`;
    }
});
