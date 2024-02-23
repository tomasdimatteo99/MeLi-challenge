<img src="https://github.com/tomasdimatteo99/MeLi-challenge/blob/main/frontend/public/logoML.png" alt="Mercado Libre - Frontend Challenge" width="400"/>

# Mercado Libre - Frontend Challenge.

El challenge consiste en crear una aplicación web la cual consta de tres vistas:

1. Caja de búsqueda
2. Resultado de búsqueda
3. Detalle de producto.

En la aplicación el usuario es capaz de ingresar un producto deseado en la caja de búsqueda y enviar el formulario. Luego, la aplicación navegará a la vista de resultados, visualizando 4 productos. Desde allí el usuario será capaz de clickear en los productos, lo que provocará que la aplicación navegue a la vista que muestra el detalle y descripción del producto clickeado.

## Tecnologías aplicadas:

* Backend:
    - Node.js (v20.10.0)
    - Express (v4.18.2), framework de Node.js
    - CORS (v2.8.5)
    - DotEnv (v16.4.4)

* Frontend:
    - React.js (v18)
    - Next.js (v14.1.0), framework de React.js SSR
    - Enrutamiento de Next.js App Router
    - JavaScript para el tipado
    - SASS (v1.71.0), procesador de CSS.
    - Eslint (v8)

* Ambos:
    - Axios (1.6.7), biblioteca de JS.


## Ejecución de la aplicación de forma local:
1. Instalar dependencias:
    - Ejecutar 'npm install' en la carpeta raíz.
2. Ejecutar el backend:
    - Desplazarse a la carpeta del backend:
        * Ejecutar 'cd ./backend' en la carpeta raíz.
    - Ejecutar 'npm run dev' en la carpeta backend.
    * Atención: correrá por defecto en 'http://localhost:8080/'. En caso de necesitar correrlo
    en otro puerto deberá crear un archivo .env y dentro colocar la variable de entorno:
    'PORT=(puerto deseado)' 
3. Ejecutar el frontend:
    - Desplazarse a la carpeta del frontend:
        * Ejecutar 'cd ./frontend' en la carpeta raíz.
    - Ejecutar 'npm run dev' en la carpeta frontend.
    * Atención: correrá por defecto en 'http://localhost:3000/'.

* Para visualizar la aplicación colocar la URL 'http://localhost:3000/' en su navegador.

## Detalle de vistas.
1. Caja de búsqueda (Inicio) - URL 'url/'.
    Contiene:
    - Navbar con un input de búsqueda (barra de búsqueda). La cuál tendrán en común todas las vistas.
2. Resultado de búsqueda - URL 'url/items?search=:queryParam'
    Contiene:
    - Navbar.
    - Contenedor con los 4 resultados de búsqueda. Consiste en 4 cards de productos, clickeables individualmente. Cada una de ellas contendrá:
        * Imágen del producto.
        * Precio y título del producto.
        * Localidad del vendedor.
3. Detalle de producto - URL 'url/items/:idParam'
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

## Estructura del proyecto:
La carpeta raiz contiene dos carpetas principales del proyecto:
### - Backend:
#### Node.js + Express.
- Contiene 2 endpoints principales:
    1. getItemsByQuery "/api/items?q=:query"
        - Función que recibe como parámetro una query, que es lo que el usuario ingresa en el input. En base al query param realiza un llamado a la api, de acuerdo al endpoint especificado:
        https://api.mercadolibre.com/sites/MLA/search?q=:query
        Recibe una respuesta de la API con los resultados de la búsqueda, utilizando Axios. Lo estructura y le establece formato JSON de acuerdo a los requerimientos establecidos y será devuelto para luego ser utilizado en el frontend, específicamente en la vista 2.

    2. getItemById "/api/items/:id"
        - Función que recibe como parámetro un ID, el cual corresponde al producto clickeado. En base al ID param realiza un llamado a la api, de acuerdo a los endpoints especificados:
        https://api.mercadolibre.com/items/:id
        https://api.mercadolibre.com/items/:id/description
        Recibe una respuesta de la API con el detalle y la descripción del producto, utilizando un Promise All en conjunto con Axios. Las estructura en una sola y le establece formato JSON de acuerdo a los requerimientos establecidos y será devuelto para luego ser utilizado en el frontend, específicamente en la vista 3.

#### Next.js
- Por falta de tiempo, se crean 2 getters extras con Next.js. Los cuales deberán ser movidos al backend (aplicándolos con Node.js + Express).
    1. getCategories
        - Función que recibe como parámetro el ID del producto buscado o clickeado. En base al ID param realiza un llamado a la api:
        https://api.mercadolibre.com/categories/:id
        Recibe respuestas de la API con las categorías, utilizando Axios. Lo estructura y le establece formato JSON para ser fácilmente utilizado en el frontend, en las vistas 2 y 3.

    2. getLocation
        - Función que recibe como parámetro un ID, el cual corresponde al producto buscado. En base al ID param realiza un llamado a la api:
        https://api.mercadolibre.com/items/:id
        Recibe una respuesta de la API con el detalle del producto, del cual extraeremos la localidad del vendedor, utilizando Axios. Lo estructura y le establece formato JSON para ser fácilmente utilizado en el frontend, específicamente en la vista 2. Se repetirá por cada producto renderizado.

### - Frontend:
#### Next.js SSR (App Router) + SASS
Estructura:
- App y components: desarrollo de las vistas complementadas con componentes modularizados y algunos reutilizables, enrutadas en base a App Router.
- Components: cada componente y vista contendrá individualmente su módulo de SASS. Lo que permitirá una mayor legibilidad en el código, una mejor organización, escalabilidad y responsive.
- Utils: se crean esqueletos de funciones de estilos (mixins). Esto permite reutilizar el código generado en CSS, ahorrar tiempo al momento de codear, una mayor organización y escalabilidad.
- Variables: se crean variables las cuales contienen los colores, fuentes y media queries. Esto permite aplicarlos facilmente, reutilización, escalabilidad y responsive.

## Posibles mejoras:
### General:
 - Mejorar la estructura de las carpetas. No me convence del todo tener dividido en frontend y backend. Por falta de conocimiento lo organicé de esta manera. Me gustaría encontrar una forma más eficiente de hacerlo.
 - Simplificar la ejecución del mismo en un solo comando.
 - Utilizar únicamente un package.json.
### Backend:
 - Mover las funciones getCategories y getLocation del frontend al backend.
 - Testing. No logré realizarlo correctamente por falta de conocimiento de testing en el backend. La falta de tiempo me imposiblitó buscar más información sobre ello.
### Frontend:
 - Responsive: es muy básico, se adecúa a los tamaños de las pantallas sin que nada se salga de la vista del usuario. Es necesario que mejor estéticamente, debido a que:
    * El tamaño de la searchbar se achica en pantallas pequeñas.
    * En la vista de detalle de producto, la reorganización de las dos columnas a una sola desacomoda el órden de los datos en cuestión. En algunos casos se cortan los datos. Me hubiese gustado gestionarlo mejor, pero por falta de tiempo se me imposibilitó.
 - Mejorar el formato de la moneda. No logré acomodar los decimales como se muestra en las vistas de ejemplo del proyecto.
 - Mejorar el SEO de forma más completa.
 
