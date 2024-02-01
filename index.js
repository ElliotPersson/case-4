let searchButton = document.querySelector("#searchButton");

//eventlistener to button that runs sendApiRequest function when clicked.
searchButton.addEventListener("click", () => {
  console.log("You clicked the button");
  sendApiRequest();
});


//fetch data from API.
async function sendApiRequest() {
    let APIKey = "wj75V8DCvyHdQaZHLukFXkQWXDCS4iZ8GxHJgYPW"

  let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${APIKey}`);
  console.log(response);
  let data = await response.json()
  console.log(data)
}

function useApiData(data){

}
