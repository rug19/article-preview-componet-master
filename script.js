const shareButton = document.getElementById("share_button");
const squareContainer = document.getElementById("square_container");
const changeImgColor = document.getElementById("share-img");

shareButton.addEventListener("click", () => {
  squareContainer.classList.toggle("open");
});

//Mudando a cor do icon da img ao evento de clicar
shareButton.addEventListener("click", () => {
  changeImgColor.classList.toggle("svg-white");
});

//Mudando a cor do background do botão ao evento de clicar
shareButton.addEventListener("click", (e) => {
  e.currentTarget.classList.toggle("svg-background-click");
});
