# sicarlos
CИKAPЛOC KИЛЛЭP

Proyecto Individual Full Stack

Descripción
Este proyecto es una broma desarrollada en el contexto de un curso de desarrollo Full Stack dedicada a uno de mis compañeros de curso. Se aborda en tono irónico el tema del crimen organizado sobre fondo rosa con efecto gliter, y lo más importante: un buscador de memes.

La aplicación hace uso de una API de memes para mostrar imágenes graciosos


Características
Se trata de una SPA que  cuenta con un menú fijo eb la cabecera, una sección "Nosotros" donde se expone una breve descripción ficticia, una sección de "Servicios", una sección con una barra de búsqueda para buscar memes y la sección de contacto.


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

Instalación
Clonar el repositorio

Clona este repositorio a tu máquina local usando el siguiente comando:

bash
Copiar
Editar
git clone https://github.com/tu-usuario/proyecto-broma.git
Abrir en tu editor de código favorito


Estructura de archivos

index.html: Archivo principal donde está la estructura HTML de la página.

styles.css: El archivo de los principales estilos de la página.

index.js: El archivo JavaScript donde se manejan las interacciones de la interfaz.

functions.js: Contiene funciones que se encargan de gestionar los eventos y la lógica de favoritos.

objects.js: Contiene las clases de los objetos

Se

API de Memes
Este proyecto utiliza una API de memes pública y gratuita para mostrar memes divertidos en la página. Se pueden ver memes de diferentes categorías, como "divertidos", "geniales", "absurdos" y mucho más.

Ejemplo de Endpoint de la API de Memes:
bash
Copiar
Editar
GET https://api.memegen.link/images/{category}/{text}.png
¿Qué devuelve la API?
La API devuelve una imagen de meme en formato PNG basada en la categoría y texto especificados. Puedes usar esta imagen en tu aplicación y mostrarla a los usuarios.

Funcionalidades
1. Mostrar Memes


Puedes ver más memes de diferentes categorías y con diferentes textos graciosos.

2. Favoritos
Los usuarios pueden añadir memes a su lista de favoritos, almacenados en localStorage para que persistan entre sesiones.

Los usuarios pueden eliminar memes de su lista de favoritos cuando lo deseen.

3. Botón de "Favoritos"
Al hacer clic en el botón "Favoritos", se muestran solo los memes que has marcado como favoritos.

4. Interacción
Cada meme tiene un botón para marcarlo como favorito y un botón para ver detalles adicionales sobre el meme.

Estructura del Proyecto
bash
Copiar
Editar
/proyecto-sicarlos


Licencia
Este proyecto está bajo la Licencia MIT. Puedes usarlo, modificarlo y distribuirlo según lo desees.

