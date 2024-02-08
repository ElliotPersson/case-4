
const hamburgerMenu = document.querySelector(".hamburgerMenu");

const offScreenMenu = document.querySelector(".offScreenMenu")

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");

})



let searchButton = document.querySelector("#searchButtonLibrary");
let inputField = document.querySelector("#planet")



searchButton.addEventListener("click", () => {
  console.log("You clicked the button");
  

});






 