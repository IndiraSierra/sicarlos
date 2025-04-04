
// Funciones para manejar los favoritos en el Local Storage

const getFavArray = () => {
    if (JSON.parse(localStorage.getItem("favs")) == null) {
        return [];
    } else {
        return JSON.parse(localStorage.getItem("favs"));
    }
};

const addToFavArray = (element) => {
    const currentArray = getFavArray();
    currentArray.push(element);
    localStorage.setItem("favs", JSON.stringify(currentArray));
};

const removeFromFavArray = (element) => {
    const currentArray = getFavArray();
    const newArray = currentArray.filter((id) => {
        return id != element;
    });
    localStorage.setItem("favs", JSON.stringify(newArray));
};

const checkIfInFavArray = (element) => {
    const currentArray = getFavArray();
    return currentArray.indexOf(element) != -1;
};

const toggleFavorite = (id, button) => {
    console.log("Toggling favorite...");
    if (checkIfInFavArray(id)) {
        removeFromFavArray(id);
    } else {
        addToFavArray(id);
    }
    button.textContent = checkIfInFavArray(id) ? "❤️" : "🤍";
    button.classList.toggle("favorited", checkIfInFavArray(id));
};

export { getFavArray, addToFavArray, removeFromFavArray, checkIfInFavArray, toggleFavorite };