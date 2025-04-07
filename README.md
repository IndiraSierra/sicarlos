# sicarlos
CИKAPЛOC KИЛЛЭP
<<<<<<< HEAD
# sicarlos
CИKAPЛOC KИЛЛЭP
=======
>>>>>>> 12f4eea95ca4e83880e2d2b9d107aaba33eea726

Proyecto Individual Full Stack

Descripción: 
Este proyecto es una broma desarrollada en el contexto de un curso de desarrollo Full Stack dedicada a uno de mis compañeros de curso. Se aborda en tono irónico el tema del crimen organizado sobre fondo rosa con efecto gliter, y lo más distópico: un buscador de memes.
La aplicación hace uso de una API de memes.


Características
Se trata de una SPA que cuenta con un menú fijo en la cabecera y un header con un video difuminado que se reproduce en bucle. Los enlaces del menú llevan a diferentes secciones de la pagina.
Las secciones se sistrubuyen sección "Nosotros" donde se expone una breve descripción ficticia, una sección de "Servicios" que cuenta con un grid de cards de los supuestos servicios, una sección con una barra de búsqueda para buscar memes y la sección de contacto.

En la sección de servicios, las imgágenes de fondo se obtienen de una url, definida por cada card en el archivo cards.json, igualmente se ha definodo un color de fondo por si en un futuro la url no está disponible.

Tecnologías
Frontend:
HTML
CSS
JavaScript
Fetch API (para consumir la API de memes)

Backend:
No hay backend real, ya que la aplicación depende de archivos estáticos y la API externa.

Almacenamiento:
LocalStorage: Para almacenar los favoritos del usuario.


Instalación:
Clonar el repositorio

Clona este repositorio a tu máquina local usando el siguiente comando:

bash:
Copiar
git clone https://github.com/IndiraSierra/sicarlos.git
Abrir en tu editor de código favorito.

Estructura de SPA:
[ Menú Fijo ]
     ├── Nosotros
     ├── Servicios
     ├── Buscar Memes
     └── Contacto

[ Header ]
     └── Video difuminado en bucle

[ Secciones ]
     ├── Sección Nosotros       ← con texto desde about-us.json
     ├── Sección Servicios      ← cards desde cards.json
     ├── Sección Buscador Memes ← API de memes (imgflip)
     └── Sección Contacto       ← (en construcción)


Estructura de archivos:

sicarlos/
│
├── index.html                       # HTML principal
│
├── Data/                            # Datos estáticos en JSON
│   ├── about-us.json                # Texto para la sección "Nosotros"
│   └── cards.json                   # Información de las cards de "Servicios"
│
├── JS/                              # Archivos JavaScript
│   ├── index.js                     # Lógica principal e interacciones del DOM
│   ├── functions.js                 # Funciones auxiliares usadas en la SPA
│   ├── localstorage.js             # Gestión de favoritos en LocalStorage
│   ├── objects.js                   # Definición de clases (como Card, Service, etc.)
│   └── contact.js                   # Lógica de la sección de contacto (futura implementación)
│
├── Styles/                          # Hojas de estilo CSS por sección
│   ├── styles.css                   # Estilos generales
│   ├── background-video.css         # Estilos del video difuminado en el header
│   ├── about-us.css                 # Estilos de la sección "Nosotros"
│   ├── cards.css                    # Estilos del grid de "Servicios"
│   ├── contact.css                  # Estilos de la sección de contacto
│   ├── navbar.css                   # Estilos del menú fijo de navegación
│   └── search-bar.css               # Estilos del buscador de memes
│
└── README.md                        # Documentación del proyecto

Los archivos siguen la lógica de las carpetas. Los datos (json) están en la carpeta "Data". Los archivos .js están en una carpera "js", y los archivos css están en una carpeta llamada "Estilos".

index.html: Archivo principal donde está la estructura HTML de la página.

la capeta "Styles" contiene:
styles.css: El archivo de los principales estilos de la página.
background-video.css: Contiene los estilos del video de fondo
about-us.css: contiene los stilos de la sección "nosotros"
cards.css: contiene los estilos de la sección servicios y las cars que ontienen los datos del cards.json
cntact.css: contiene los esilos de la sección contacto
navbar.css: contiene los estios de la barra estatica y menu de navegación
search-bar.css: contiene los estilos del buscados de memes

LA carpeta "JS" contiene:
index.js: El archivo JavaScript donde se manejan las interacciones de la interfaz y DOM
functions.js: contiene la definición de las funciones que se utilizan en la SPA
localstorage.js: Contiene funciones que se encargan de gestionar los eventos y la lógica de favoritos.
objects.js: Contiene las clases de los objetos
contact.js: contiene la lógica de la sección de contacto (Futura Implementación)

La carpera "Data" contiene:
cards.json: contiene los textos del objeto card
about-us.json: contiene el texto de la descripción de la sección "Nosotros"

API de Memes (https://api.imgflip.com):
Este proyecto utiliza una API de memes pública y gratuita para mostrar memes divertidos en la página. Se pueden ver memes de diferentes categorías, como "divertidos", "geniales", "absurdos" y mucho más.


Ejemplo de Endpoint de la API de Memes:
bash
Copiar
Editar
GET https://imgflip.com/api.link/images/{category}/{text}.png

¿Qué devuelve la API?
La API devuelve una imagen de meme en formato PNG basada en la categoría y texto especificados. Puedes usar esta imagen en tu aplicación y mostrarla a los usuarios.
Example Success Response:
{
   "success": true,
   "data": {
      "url": "https://i.imgflip.com/123abc.jpg",
      "page_url": "https://imgflip.com/i/123abc"
   }
}
		
Example Failure Response:
{
   "success" => false,
   "error_message" => "Some hopefully-useful statement about why it failed"
}


Funcionalidades
1. Mostrar Memes
Puedes ver más memes de diferentes categorías y con diferentes textos graciosos.

2. Favoritos
Los usuarios pueden añadir servicios a su lista de favoritos
Los usuarios pueden eliminar memes de su lista de favoritos cuando lo deseen.


4. Botón de "Favoritos"
Al hacer clic en el botón "Favoritos", se muestran solo los servicios marcado como favoritos.

5. Interacción
Cada card de servicios tiene un botón para marcarlo como favorito.
Al hacer clic sobre un servicio se muestra una descripción ampliada del servicio.

Estructura del Proyecto
bash
Copiar
Editar
/proyecto-sicarlos


Licencia
Este proyecto está bajo la Licencia MIT. Puedes usarlo, modificarlo y distribuirlo según lo desees.
Pero mejos no lo distribuyas porque las responsabilidades sobre distribuir una web basada en servicios de sicarios recale completamente en su distribiudor.

