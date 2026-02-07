const images = [
  // Nature
  { url: "https://source.unsplash.com/400x300/?nature,1", category: "nature" },
  { url: "https://source.unsplash.com/400x300/?forest,2", category: "nature" },
  { url: "https://source.unsplash.com/400x300/?mountain,3", category: "nature" },
  { url: "https://source.unsplash.com/400x300/?river,4", category: "nature" },
  { url: "https://source.unsplash.com/400x300/?tree,5", category: "nature" },
  { url: "https://source.unsplash.com/400x300/?sky,6", category: "nature" },
  { url: "https://source.unsplash.com/400x300/?lake,7", category: "nature" },
  { url: "https://source.unsplash.com/400x300/?flowers,8", category: "nature" },

  // Portraits
  { url: "https://source.unsplash.com/400x300/?portrait,woman", category: "portraits" },
  { url: "https://source.unsplash.com/400x300/?portrait,man", category: "portraits" },
  { url: "https://source.unsplash.com/400x300/?portrait,model", category: "portraits" },
  { url: "https://source.unsplash.com/400x300/?face,closeup", category: "portraits" },
  { url: "https://source.unsplash.com/400x300/?girl,smile", category: "portraits" },
  { url: "https://source.unsplash.com/400x300/?boy,portrait", category: "portraits" },
  { url: "https://source.unsplash.com/400x300/?old,portrait", category: "portraits" },

  // Urban
  { url: "https://source.unsplash.com/400x300/?city,lights", category: "urban" },
  { url: "https://source.unsplash.com/400x300/?architecture,modern", category: "urban" },
  { url: "https://source.unsplash.com/400x300/?street,night", category: "urban" },
  { url: "https://source.unsplash.com/400x300/?buildings,skyline", category: "urban" },
  { url: "https://source.unsplash.com/400x300/?urban,life", category: "urban" },
  { url: "https://source.unsplash.com/400x300/?bridge,city", category: "urban" },
  { url: "https://source.unsplash.com/400x300/?metro,subway", category: "urban" },

  // Abstract
  { url: "https://source.unsplash.com/400x300/?abstract,colors", category: "abstract" },
  { url: "https://source.unsplash.com/400x300/?light,shadow", category: "abstract" },
  { url: "https://source.unsplash.com/400x300/?texture,closeup", category: "abstract" },
  { url: "https://source.unsplash.com/400x300/?shapes,abstract", category: "abstract" },
  { url: "https://source.unsplash.com/400x300/?minimal,design", category: "abstract" },
  { url: "https://source.unsplash.com/400x300/?pattern,geometry", category: "abstract" },
  { url: "https://source.unsplash.com/400x300/?artistic,photo", category: "abstract" }
];

const gallery = document.getElementById("gallery");

function renderImages(category = "all") {
  gallery.innerHTML = "";
  images
    .filter(img => category === "all" || img.category === category)
    .forEach((img, index) => {
      const card = document.createElement("div");
      card.className = "image-card";
      card.innerHTML = `
        <img src="${img.url}" alt="photo-${index}" loading="lazy" />
        <button class="like-btn" onclick="likeImage(this)">♡ Like</button>
      `;
      gallery.appendChild(card);
    });
}

function filterImages(category) {
  renderImages(category);
}

function likeImage(btn) {
  if (btn.innerText.includes("♡")) {
    btn.innerText = "♥ Liked";
  } else {
    btn.innerText = "♡ Like";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderImages();
});
