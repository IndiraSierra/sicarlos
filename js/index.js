document.addEventListener('DOMContentLoaded', function() {
    //click event to all menu links
    document.querySelectorAll('.menu-li a').forEach(link => {
        link.addEventListener('click', function(e) {
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

document.addEventListener('DOMContentLoaded', function() {
    //click event to all menu links
    document.querySelectorAll('.menu-li a').forEach(link => {
        link.addEventListener('click', function(e) {
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
document.addEventListener('DOMContentLoaded', function() {
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