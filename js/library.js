
const hamburgerMenu = document.querySelector(".hamburgerMenu");

const offScreenMenu = document.querySelector(".offScreenMenu")

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");

})



document.querySelector("#searchButtonLibrary").addEventListener("click",getFetch)

function getFetch(){
    const inputField = document.querySelector("input").value
    const url =`https://images-api.nasa.gov/search?q={q}${inputField}`
fetch(url)
.then(res => res.json())
.then(data => {
    console.log(data)
})

}







 