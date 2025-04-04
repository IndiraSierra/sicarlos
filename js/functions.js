// functions.js
const getFavArray = () => {
  return JSON.parse(localStorage.getItem("favs")) || [];
};

const addToFavArray = (element) => {
  const currentArray = getFavArray();
  currentArray.push(element);
  localStorage.setItem("favs", JSON.stringify(currentArray));
};

const removeFromFavArray = (element) => {
  const currentArray = getFavArray();
  const newArray = currentArray.filter((id) => id !== element);
  localStorage.setItem("favs", JSON.stringify(newArray));
};

const checkIfInFavArray = (element) => {
  const currentArray = getFavArray();
  return currentArray.includes(element);
};

const toggleFavorite = (id, button) => {
  if (checkIfInFavArray(id)) {
    removeFromFavArray(id);
  } else {
    addToFavArray(id);
  }
  button.textContent = checkIfInFavArray(id) ? "❤️" : "🤍";
  button.classList.toggle("favorited", checkIfInFavArray(id));
};

//SEARCH BAR
async function fetchMemes() {
  try {
    const response = await fetch('https://api.imgflip.com/get_memes');
    const data = await response.json();

    if (data.success) {
      return data.data.memes;
    } else {
      throw new Error('Error al cargar memes');
    }
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

function displayMemes(memes, container) {
  container.innerHTML = '';

  memes.forEach(meme => {
    const memeCard = document.createElement('div');
    memeCard.className = 'meme-card';

    memeCard.innerHTML = `
            <img src="${meme.url}" alt="${meme.name}" class="meme-image">
            <div class="meme-info">
                <h3 class="meme-title">${meme.name}</h3>
                <button class="use-button" data-id="${meme.id}" data-url="${meme.url}">Usar este meme</button>
            </div>
        `;

    container.appendChild(memeCard);
  });
}

function showMessage(message, element) {
  element.textContent = message;
}

function handleMemeSelection(memeId, memeUrl) {
  alert(`Has seleccionado el meme ID: ${memeId}\nPara crear un meme personalizado, puedes usar la API de Imgflip con este ID.`);
}

function toggleLoader(loaderElement, isVisible) {
  loaderElement.style.display = isVisible ? 'block' : 'none';
}


export {
  getFavArray,
  addToFavArray,
  removeFromFavArray,
  checkIfInFavArray,
  toggleFavorite,
};

export { fetchMemes, displayMemes, showMessage, handleMemeSelection, toggleLoader }