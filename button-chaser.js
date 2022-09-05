button = document.getElementsByClassName("button-container")[0];

button.addEventListener("mouseover", function moveButton() {
  const buttonPosLeft = button.offsetLeft;
  button.style.left = `${buttonPosLeft + 30}px`;
  concole.log(button.style.left);
});
