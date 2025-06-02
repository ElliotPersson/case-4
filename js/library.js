// Hamburger menu:
const hamburgerMenu = document.querySelector(".hamburgerMenu");
const offScreenMenu = document.querySelector(".offScreenMenu");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

// Serach imput references:
const searchTermInput = document.querySelector("#planet");
const searchButton = document.querySelector("#searchButtonLibrary");
const resultsContainer = document.querySelector(".searchResults");

searchButton.addEventListener("click", async () => {
  const query = searchTermInput.value.trim();

  // If the input is empty, show an error message:
  if (!query) {
    resultsContainer.innerHTML = "<p class='error'>Please enter a search term.</p>";
    return;
  }

  
  resultsContainer.innerHTML = "<p class='loading'>Loading…</p>";

  // API url with query + making sure its a image file:
  const apiUrl = "https://images-api.nasa.gov/search?q=" + query + "&media_type=image";

  try {
  
    const response = await fetch(apiUrl);
    const data = await response.json();
    const items = data.collection.items || [];

    // If there are no items, show “no images found” error:
    if (items.length === 0) {
      resultsContainer.innerHTML = "<p class='error'>No images found.</p>";
      return;
    }

    
    // Clear out “Loading…” and build image chards:
    resultsContainer.innerHTML = "";
    
    items.forEach((item) => {
      
      const info = item.data[0];
      const thumbUrl = item.links?.[0]?.href;

      // If theres no thumbnail url, skip this item:
      if (!thumbUrl) return;

      const cardDiv = document.createElement("div");
      cardDiv.className = "card";

     
      const link = document.createElement("a");
      link.href = thumbUrl;
      link.target = "_blank";

      
      const img = document.createElement("img");
      img.src = thumbUrl;
      img.alt = info.title || "No title";

      
     
      link.appendChild(img);
      cardDiv.appendChild(link);
      resultsContainer.appendChild(cardDiv);
    });

  } catch (err) {
    
    // Error if fetch fails:
    console.error(err);
    resultsContainer.innerHTML = "<p class='error'>Fetch failed. Try again.</p>";
  }
});
