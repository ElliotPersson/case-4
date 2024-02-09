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

  const rover = data.photos
const output = rover
  .map(item => 
    `<img src="${item.img_src}">`
  ).join("")

  document.querySelector(".marsPhotos").innerHTML = output

})


  /* function result(){
    .map((item)) => {
      
    }
  } */
/*   .filter((item) => item.camera.name.includes("RHAZ")) */