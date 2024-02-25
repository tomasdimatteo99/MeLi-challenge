<img src="https://github.com/tomasdimatteo99/MeLi-challenge/blob/main/frontend/public/logoML.png" alt="Mercado Libre - Frontend Challenge" width="400"/>

# Mercado Libre - Frontend Challenge.

El challenge consiste en crear una aplicación web con las siguientes vistas:

1. Caja de búsqueda:
    * Permite al usuario ingresar el producto que desea buscar en un campo de búsqueda y enviar el formulario.
    * Al enviar el formulario o hacer clic en el botón de búsqueda, el usuario será dirigido a la siguiente vista.
2. Resultado de búsqueda:
    * Esta vista muestra los resultados relacionados con el producto buscado, incluyendo hasta 4 productos con sus características.
    * Cada producto es clickeable, lo que lleva al usuario a la vista de detalle del producto.
3. Detalle de producto:
    * Esta vista muestra la información detallada sobre un producto en específico.

 - Cada vista dispone de una navbar, que contiene una barra de búsqueda.
 - Se puede acceder a cualquiera de las vistas a través de la URL. Ya que la aplicación es capaz de detectar los parámetros especificados.

## ⚙️ Tecnologías aplicadas:

* Backend:
    - Node.js (v20.10.0)
    - Express (v4.18.2) - Framework de Node.js
    - CORS (v2.8.5)
    - DotEnv (v16.4.4)

* Frontend:
    - React.js (v18)
    - Next.js (v14.1.0) - Framework de React.js para SSR (Server-Side Rendering)
    - Enrutamiento de Next.js App Router
    - JavaScript para el tipado
    - SASS (v1.71.0) - Procesador de CSS.
    - Eslint (v8)

* Ambos:
    - Axios (1.6.7) - Biblioteca de JavaScript para solicitudes HTTP.

* Testing:
    - React Testing Library
    - Jest


## 💻 Ejecución de la aplicación de forma local:

* Ejecutar el backend:
    1. Desplazarse a la carpeta del backend:
        `cd ./backend`
    2. Instalar dependencias:
        `npm install`
    3. Correr el backend:
        `npm run dev`
    * *Atención*: correrá por defecto en 'http://localhost:8080/'. Si necesitas cambiar el puerto, crea un archivo .env y dentro colocar la variable de entorno: 'PORT=(puerto deseado)' 

* Ejecutar el frontend:
    1. Desplazarse a la carpeta del frontend:
        `cd ./frontend`
        - O si estás en la carpeta backend:
        `cd ../frontend`
    2. Instalar dependencias:
        `npm install`
    3. Correr el frontend:
        `npm run dev`
    * *Atención*: correrá por defecto en 'http://localhost:3000/'.

*Es necesario ejecutar ambos para que la aplicación funcione correctamente.*

* Para visualizar la aplicación colocar la URL 'http://localhost:3000/' en su navegador.

## 🧑‍💻 Detalle de vistas:
1. Caja de búsqueda (Inicio) - *URL* 'url/'.
    Contiene:
    - Navbar con un input de búsqueda (barra de búsqueda). La cuál tendrán en común todas las vistas.
2. Resultado de búsqueda - *URL* 'url/items?search=:queryParam'
    Contiene:
    - Navbar.
    - Contenedor con los 4 resultados de búsqueda. Consiste en 4 cards de productos, clickeables individualmente. Cada una de ellas contendrá:
        * Imágen del producto.
        * Precio y título del producto.
        * Localidad del vendedor.
3. Detalle de producto - *URL* 'url/items/:idParam'
    Contiene:
    - Navbar.
    - Contenedor con el detalle del producto clickeado o buscado por URL. Consiste en dos columnas:
        * Columna izquierda:
            * Imagen del producto.
            * Descripción del producto.
        * Columna derecha:
            * Condición y vendidos.
            * Título del producto.
            * Precio del producto.
            * Botón de compra.

Extras:
- not-found: cuando ocurra un error en las búsquedas, se mostrará una página 404.
- loading: cuando el componente comience a cargar los resultados, se mostrará una página de carga.

## 🏗️ Estructura del proyecto:
La carpeta raiz contiene dos carpetas principales del proyecto:
### - Backend:
#### Node.js + Express.
- Contiene 2 endpoints principales:
    1. getItemsByQuery - endpoint: "/api/items?q=:query"
        * Obtiene resultados de búsqueda en base a la consulta del usuario.
        - Recibe como parámetro una query, información ingresada en el input. Realiza un llamado a la api, de acuerdo al endpoint especificado:
        https://api.mercadolibre.com/sites/MLA/search?q=:query
        - Estructura la respuesta y le establece formato JSON de acuerdo a los requerimientos establecidos. Será devuelto formateado para luego ser utilizado en el frontend, específicamente en la vista 2.

    2. getItemById - apunta a: "/api/items/:id"
        * Obtiene detalles de un producto específico.
        - Recibe como parámetro un ID, el cual corresponde al producto clickeado. Realiza un llamado a la api, de acuerdo a los endpoints especificados:
        https://api.mercadolibre.com/items/:id
        https://api.mercadolibre.com/items/:id/description
        - Estructura las respuestas en una sola y le establece formato JSON de acuerdo a los requerimientos establecidos. Será devuelto formateado para luego ser utilizado en el frontend, específicamente en la vista 3.

#### Next.js
1. getCategories
    * Obtiene las categorías de un producto.
    - Recibe como parámetro el ID del producto buscado o clickeado. Realiza un llamado a la api:
    https://api.mercadolibre.com/categories/:id
    - Estructura la respuesta y le establece formato JSON para ser fácilmente utilizado en el frontend, en las vistas 2 y 3.

2. getLocation
    * Obtiene la ubicación del vendedor de un producto.
    - Recibe como parámetro el ID del producto buscado. Realiza un llamado a la api:
    https://api.mercadolibre.com/items/:id
    Recibe una respuesta de la API con el detalle del producto, del cual extraeremos la localidad del vendedor. Estructura la respuesta y le establece formato JSON para ser fácilmente utilizado en el frontend, en la vista 2. Se repetirá por cada producto renderizado.

### - Frontend:
#### Next.js SSR (App Router) + SASS
Estructura:
- App y componentes: vistas y componentes modulares y reutilizables, enrutados con App Router. Cada vista principal contendrá su metadata que se encargará de generar el SEO correspondiente de la página.
- Estilos: cada vista y componente contiene su módulo de SASS. Lo que permitirá una mayor legibilidad en el código de estilos, una mejor organización, escalabilidad y responsive. 
- Utilidades para SASS: Se crean esqueletos de funciones de estilos (mixins). Esto permite reutilizar el código generado en CSS, ahorrar tiempo al momento de codear, una mayor organización y escalabilidad. También se crean variables las cuales contienen los colores, fuentes y media queries requeridos. Esto permite aplicarlos facilmente, reutilización, escalabilidad y responsive.

## 💡 Posibles mejoras:
### General:
 - Simplificar la ejecución del mismo en un solo comando.
 - Utilizar únicamente un package.json.
### Backend:
 - Mover las funciones 'getCategories' y 'getLocation' del frontend al backend, utilizando Nodejs + Express.
 - Testing: no fui capaz de finalizar a causa de faltas de conocimientos sobre el tema. Con más de tiempo, me hubiese gustado indagar más sobre el tema y realizarlos.
### Frontend:
 - Crear variables de URL para darle mayor prolijidad y escalabilidad al código.
 - Responsive: es muy básico, se adecúa a los tamaños de las pantallas sin que nada se salga de la vista del usuario. Es necesario mejorarlo estéticamente, debido a que:
    * El tamaño de la searchbar se achica demasiado en pantallas pequeñas. Es utilizable, pero rompe la estética de la app.
    * En la vista de detalle de producto, la reorganización de las dos columnas a una sola desacomoda el órden de los datos. Con más tiempo, me hubiese gustado gestionarlo mejor.
 - Mejorar el formato de la moneda. No logré acomodar los decimales como se muestra en las vistas de ejemplo del proyecto.
 - Mejorar el SEO de forma más completa. Agregar enfoque en openGraph para social media.