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
  
  export {
    getFavArray,
    addToFavArray,
    removeFromFavArray,
    checkIfInFavArray,
    toggleFavorite,
  };
  