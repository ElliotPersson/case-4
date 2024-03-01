//Hamburger menu:
const hamburgerMenu = document.querySelector(".hamburgerMenu");

const offScreenMenu = document.querySelector(".offScreenMenu");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});



const url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=wj75V8DCvyHdQaZHLukFXkQWXDCS4iZ8GxHJgYPW"
    

  

fetch(url)
.then(res => res.json()) 
.then(data =>{

  


  
  console.log(data)
  let cb1 = document.querySelector("#cb1");
cb1.addEventListener("click", () => {

  cb1 = data.photos.filter((item) => item.camera.name.includes("FHAZ"))
const output = cb1
  .map(item => 
    `<img src="${item.img_src}">`
  ).join("")
  


  document.querySelector(".marsPhotos").innerHTML = output


})


let cb2 = document.querySelector("#cb2");
cb2.addEventListener("click", () => {

  cb2 = data.photos.filter((item) => item.camera.name.includes("RHAZ"))
const output = cb2
  .map(item => 
    `<img src="${item.img_src}">`
  ).join("")
  


  document.querySelector(".marsPhotos").innerHTML = output


})

let cb3 = document.querySelector("#cb3");
cb3.addEventListener("click", () => {

  cb3 = data.photos.filter((item) => item.camera.name.includes("MAST"))
const output = cb3
  .map(item => 
    `<img src="${item.img_src}">`
  ).join("")
  


  document.querySelector(".marsPhotos").innerHTML = output


})

let cb4 = document.querySelector("#cb4");
cb4.addEventListener("click", () => {

  cb4 = data.photos.filter((item) => item.camera.name.includes("CHEMCAM"))
const output = cb4
  .map(item => 
    `<img src="${item.img_src}">`
  ).join("")
  


  document.querySelector(".marsPhotos").innerHTML = output


})

let cb5 = document.querySelector("#cb5");
cb5.addEventListener("click", () => {

  cb5 = data.photos.filter((item) => item.camera.name.includes("NAVCAM"))
const output = cb5
  .map(item => 
    `<img src="${item.img_src}">`
  ).join("")
  


  document.querySelector(".marsPhotos").innerHTML = output


})

})


  /* function result(){
    .map((item)) => {
      
    }
  } */
/*   .filter((item) => item.camera.name.includes("RHAZ")) */