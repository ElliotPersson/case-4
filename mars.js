
//Hamburger menu:
const hamburgerMenu = document.querySelector(".hamburgerMenu");

const offScreenMenu = document.querySelector(".offScreenMenu")

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");

})


//mars rover photos:
const marsImage = document.querySelector(".marsImage");

fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=wj75V8DCvyHdQaZHLukFXkQWXDCS4iZ8GxHJgYPW").then((response)=>{return response.json()})