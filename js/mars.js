//Hamburger menu:
const hamburgerMenu = document.querySelector(".hamburgerMenu");
const offScreenMenu = document.querySelector(".offScreenMenu");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

//API setup:
const API_KEY = "wj75V8DCvyHdQaZHLukFXkQWXDCS4iZ8GxHJgYPW";
const SOL = 1000;
const ROVER = "curiosity";
const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${ROVER}/photos?sol=${SOL}&api_key=${API_KEY}`;

const searchBtn = document.querySelector(".marsButton");
const photosContainer = document.querySelector(".marsPhotos");


searchBtn.addEventListener("click", async () => {
  
 //get checked camera values:
  const selected = Array.from(
    document.querySelectorAll('input[name="camera"]:checked')
  ).map(cb => cb.value);

  if (!selected.length) {
    photosContainer.innerHTML = "<p class='error'>Please select at least one camera.</p>";
    return;
  }

  
  try {
    const res = await fetch(url);
    const { photos } = await res.json();

    // filter by selected camersas:
    const filtered = photos.filter(p => selected.includes(p.camera.name));
    if (!filtered.length) {
      photosContainer.innerHTML = "<p class='error'>No photos for that selection.</p>";
      return;
    }

  // render photos:
    photosContainer.innerHTML = filtered
      .map(p => `
        <figure class="photo-card">
          <img src="${p.img_src}" alt="${p.camera.full_name}">
          <figcaption>
            <strong>${p.camera.name}</strong><br>
            ${p.earth_date}
          </figcaption>
        </figure>
      `).join("");
  } catch (err) {

    // Errors if fetch fails:
    console.error(err);
    photosContainer.innerHTML = "<p class='error'>Failed to load photos.</p>";
  }
});

  

  /* function result(){
    .map((item)) => {
      
    }
  } */
/*   .filter((item) => item.camera.name.includes("RHAZ")) */




