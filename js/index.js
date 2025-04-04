document.addEventListener('DOMContentLoaded', function () {
    //click event to all menu links
    document.querySelectorAll('.menu-li a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);


            // hide sections
            document.querySelectorAll('.section').forEach(section => {
                section.classList.remove('active');
            });

            // show active section
            document.getElementById(targetId).classList.add('active');

            //smooth  Scroll 
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // home section avive default
    document.getElementById('home').classList.add('active');
});

document.addEventListener('DOMContentLoaded', function () {
    //click event to all menu links
    document.querySelectorAll('.menu-li a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);

            // hide sections
            document.querySelectorAll('.section').forEach(section => {
                section.classList.remove('active');
            });

            // show active section
            document.getElementById(targetId).classList.add('active');

            //smooth Scroll 
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // home section active default
    document.getElementById('home').classList.add('active');
})

//ADD TEXT TO HTML IN SECTION ABOUT US
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


/* ADD SERVICES CARDS TO HTML IN SERVICE SPA SECTION */
document.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById("servicesGrid");

    try {
        const response = await fetch("/data/cards.json");
        const services = await response.json();

        services.forEach(service => {
            const card = document.createElement("div");
            card.classList.add("card");
            // SET URL BACKGROUND
            if (service.background) {
                card.style.backgroundImage = `url('${service.background}')`;
                card.style.backgroundSize = 'cover';
                card.style.backgroundRepeat = 'no-repeat';
            }
            card.innerHTML = `
                <i class="fas ${service.icon}"></i>
                <div class="card-title">${service.title}</div>
                <div class="card-description">${service.description}</div>
                <div class="full-description hidden">${service["full-description"]}</div>
            `;

        // CLICK EVENT TO FULL DESCRIPTION
            card.addEventListener("click", () => {
                console.log(`Clic detectado en: ${service.title}`); 
                const fullDesc = card.querySelector(".full-description");

                if (fullDesc) {
                    fullDesc.classList.toggle("hidden");
                    console.log("Estado de full-description:", fullDesc.classList);
                } else {
                    console.warn("No se encontró el elemento");
                }
            });
            // ADD CARD TO CONTAINER
            container.appendChild(card);
        });

        console.log("Servicios cargados correctamente:", services); // DEPURACIÓN
    } catch (error) {
        console.error("Error cargando los servicios:", error);
    }
});
