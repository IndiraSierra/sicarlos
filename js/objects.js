import { toggleFavorite, checkIfInFavArray } from "/js/functions.js";

class Service {
  constructor(id, title, description, fullDescription, icon, color, background) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.fullDescription = fullDescription;
    this.icon = icon;
    this.color = color;
    this.background = background;
  }

  createCard() {
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("data-id", this.id);

    card.innerHTML = `
      <i class="fas ${this.icon}"></i>
      <div class="card-title">${this.title}</div>
      <div class="card-description">${this.description}</div>
      <div class="full-description hidden">${this.fullDescription}</div>
      <button class="hire-button hidden">Contratar</button>
      <button class="fav-button">${checkIfInFavArray(this.id) ? "❤️" : "🤍"}</button>
    `;

    // BACKGROUND
    if (this.background) {
      card.style.backgroundImage = `url('${this.background}')`;
      card.style.backgroundSize = "cover";
    }

    // SHOW FULL DESCRIPTION
    card.addEventListener("click", () => {
      const fullDesc = card.querySelector(".full-description");
      const hireButton = card.querySelector(".hire-button");
      fullDesc.classList.toggle("hidden");
      hireButton.classList.toggle("hidden");
    });

    // ADD TO FAVORITES
    const favButton = card.querySelector(".fav-button");
    favButton.addEventListener("click", (e) => {
      e.stopPropagation(); // Evita que se active el toggle del card completo
      toggleFavorite(this.id, favButton);
    });

    return card;
  }
}

export { Service };