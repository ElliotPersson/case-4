let searchButton = document.querySelector("#searchButton");

searchButton.addEventListener("click", () => {
  console.log("You clicked the button");
  sendApiRequest();
});

async function sendApiRequest() {
    let APIKey = "wj75V8DCvyHdQaZHLukFXkQWXDCS4iZ8GxHJgYPW"

  let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${APIKey}`);
  console.log(response);
}

function useApiData(data){

}
