
//Hamburger menu:
const hamburgerMenu = document.querySelector(".hamburgerMenu");

const offScreenMenu = document.querySelector(".offScreenMenu")

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");

})


//Apod:
let searchButton = document.querySelector("#searchButton");

//eventlistener to button that runs sendApiRequest function when clicked.
searchButton.addEventListener("click", () => {
  console.log("You clicked the button");
  sendApiRequest();

});


//fetch data from API.
async function sendApiRequest() {
  
  const input = document.querySelector('input').value
  console.log(input)
  
  let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=wj75V8DCvyHdQaZHLukFXkQWXDCS4iZ8GxHJgYPW&date=${input}`);
  console.log(response);
  let data = await response.json()
  console.log(data)
  useApiData(data)
}

function useApiData(data){
document.querySelector(".image").innerHTML += `<img src="${data.url}">`
}




