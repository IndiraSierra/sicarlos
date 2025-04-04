import { Service } from "/js/objects.js";  
import { getFavArray } from "/js/localstorage.js";

// MENU
document.addEventListener('DOMContentLoaded', function () {
    // CLICK TO ALL LINKS
    document.querySelectorAll('.menu-li a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);

            // HIDE SECTIONS
            document.querySelectorAll('.section').forEach(section => {
                section.classList.remove('active');
            });
            // SHOW ACTIVE SECTION
            document.getElementById(targetId).classList.add('active');

            // SCROLL TO ACTIVE SECTION
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });
    document.getElementById('home').classList.add('active');
});

// ADD TEXT TO HTML IN SECTION ABOUT US
document.addEventListener('DOMContentLoaded', function () {
    fetch('/data/about-us.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('about-text').innerHTML = data.aboutUs.description;
            document.querySelector('.about-title').textContent = data.aboutUs.title;
        })
        .catch(error => {
            console.error('Error cargando el texto:', error);
            document.getElementById('about-text').innerHTML = "Actualmente no podemos mostrar la información sobre nosotros. Por favor, inténtelo más tarde.";
        });
});

// ADD SERVICES CARDS TO HTML IN SERVICE SPA SECTION
document.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById("servicesGrid");

    try {
        const response = await fetch("/data/cards.json");
        const servicesData = await response.json();

        servicesData.forEach(serviceData => {
            const service = new Service(
                serviceData.id,
                serviceData.title,
                serviceData.description,
                serviceData["full-description"],
                serviceData.icon,
                serviceData.color,
                serviceData.background
            );

            const card = service.createCard();
            container.appendChild(card);
        });

        console.log("Servicios cargados correctamente:", servicesData);
    } catch (error) {
        console.error("Error cargando los servicios:", error);
    }
});


// FAVORITE BUTTON
document.getElementById("favButton").addEventListener("click", async () => {
  const allServices = await fetch("/data/cards.json").then((res) => res.json());
  const favIds = getFavArray();

  const servicesGrid = document.getElementById("servicesGrid");
  const favoritesGrid = document.getElementById("favoritesGrid");
  const showAllButton = document.getElementById("showAllButton");
  const favButton = document.getElementById("favButton");

  // Ocultar todos los servicios
  servicesGrid.classList.add("hidden");
  // Limpiar favoritos anteriores
  favoritesGrid.innerHTML = "";

  // Filtrar servicios favoritos (asegura que el tipo coincida: string vs número)
  const favoriteServices = allServices.filter((service) =>
    favIds.includes(String(service.id))
  );

  // Mostrar cards favoritas
  if (favoriteServices.length === 0) {
    favoritesGrid.innerHTML = "<p>No tienes servicios favoritos aún.</p>";
  } else {
    favoriteServices.forEach((serviceData) => {
      const service = new Service(
        serviceData.id,
        serviceData.title,
        serviceData.description,
        serviceData["full-description"],
        serviceData.icon,
        serviceData.color,
        serviceData.background
      );
      const card = service.createCard();
      favoritesGrid.appendChild(card);
    });
  }

  favoritesGrid.classList.remove("hidden");
  showAllButton.classList.remove("hidden");
  favButton.classList.add("hidden");
});

// BOTÓN VER TODOS
document.getElementById("showAllButton").addEventListener("click", () => {
  document.getElementById("servicesGrid").classList.remove("hidden");
  document.getElementById("favoritesGrid").classList.add("hidden");
  document.getElementById("showAllButton").classList.add("hidden");
  document.getElementById("favButton").classList.remove("hidden");
});
