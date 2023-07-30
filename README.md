# Where is the world?
El proyecto **where is the world?** es una aplicación web que muestra las banderas del mundo y permite a los usuarios ver información detallada sobre cada país representado por las banderas. Esta aplicación se creó como parte de una prueba técnica para demostrar habilidades en el desarrollo Frontend.

Los usuarios pueden buscar países por nombre o filtrarlos por región para encontrar fácilmente los países que desean explorar. Al hacer clic en una bandera, se abrirá una vista detallada que mostrará información adicional sobre el país, como su nombre, capital, población, idiomas oficiales, moneda y más.

Puedes ver el proyecto en acción haciendo clic en el siguiente enlace: [Ver el Proyecto](https://bia-technical-test-umber.vercel.app/)

## Arquitectura Propuesta
Para resolver el reto, se propone una arquitectura Frontend utilizando el framework Next.js. La organización del proyecto seguirá una estructura de carpetas que promueve la modularidad y la reutilización de componentes. A continuación, se describen las principales carpetas utilizadas:

- components: En esta carpeta, se alojan los componentes reutilizables que forman la interfaz de usuario. Cada componente se diseña para tener un propósito específico y se puede utilizar en varias partes del proyecto.

- consts: Esta carpeta contiene archivos que almacenan constantes o valores que se utilizan en diferentes partes del proyecto. Por ejemplo, puede contener constantes de rutas de API o datos que no cambian durante la ejecución.

- hooks: Los hooks personalizados se agrupan en esta carpeta. Estos hooks pueden ser reutilizados en diferentes componentes para compartir lógica o funcionalidades comunes, como la gestión del estado o el manejo de eventos.

- locales: Si se necesita incluir soporte para internacionalización en el proyecto, esta carpeta contendrá los archivos relacionados con la traducción del contenido.

- styles: Aquí se encuentran los archivos de estilos CSS para aplicar la apariencia visual de la interfaz de usuario. 

- utils: En esta carpeta, se almacenan utilidades o funciones de utilidad que se pueden utilizar en diferentes partes del proyecto. Esto ayuda a mantener el código limpio y modular.

```
├── public
├── src
│   ├── api
│   ├── components
│   |   ├── common
│   |   ├── designSystem
│   |   ├── layout
│   ├── consts
│   ├── hooks
│   ├── locales
│   |   ├── en
│   |   |   ├── en.json
│   ├── pages
│   ├── styles
│   │   ├── _variables.scss
│   │   ├── global.scss
│   │   ├── mediaQueries.scss
│   ├── utils
├── package.json
└── README.md
```

## Generalidades de la Solución
Para implementar la solución, se siguió la arquitectura propuesta y se tomaron las siguientes decisiones clave:

- Se utilizó SWR (Stale-While-Revalidate) como librería para el manejo de caché y la gestión de solicitudes HTTP a la API de https://restcountries.com/#rest-countries. SWR permite almacenar en caché los resultados de las solicitudes para mejorar el rendimiento y actualizar automáticamente los datos en segundo plano.
- Se implementó la funcionalidad de búsqueda y filtrado utilizando la librería fuse.js. Esta librería proporciona una búsqueda rápida y flexible con opciones de filtrado en el cliente. Los usuarios pueden buscar países por nombre y filtrarlos por región de manera eficiente y en tiempo real.
- Los componentes se diseñaron con un enfoque en la reutilización y la modularidad, lo que facilita la adición de nuevas funcionalidades o mejoras en el futuro.
- Para los estilos, se utilizó SCSS (Sass) como preprocesador de CSS. SCSS permitió escribir estilos más legibles, estructurados y reutilizables, lo que mejoró la organización del código de estilos.
- Se implementó un tema de dark mode utilizando CSS variables, lo que permite a los usuarios alternar entre temas claro y oscuro según sus preferencias.
## Instrucciones para Ejecutar el Proyecto
1. Clona el repositorio ejecutando el siguiente comando en tu terminal:
```
https://github.com/JSebastianPulgarin/bia-technical-test.git
```
2. Accede al directorio del proyecto:
```
cd bia-technical-test/
```
3. Instala las dependencias:
```
yarn install
```
4. Asegúrate de agregar las variables de entorno necesarias para el correcto funcionamiento del proyecto. Puedes consultar el archivo ".env.example" para conocer las variables requeridas. Debes crear un archivo ".env" en la raíz del proyecto y definir las variables de entorno necesarias siguiendo el formato del archivo de ejemplo.
5. Ejecuta el proyecto:
```
yarn dev
```

![image](https://github.com/JSebastianPulgarin/bia-technical-test/assets/45098556/788a2bc1-babc-4e34-a748-51bd59759831)


![image](https://github.com/JSebastianPulgarin/bia-technical-test/assets/45098556/674ef97b-82db-4929-9f99-8fa10f95afec)


![image](https://github.com/JSebastianPulgarin/bia-technical-test/assets/45098556/19c4bb39-0fd7-48ab-a576-f6eb43d105f3)


![image](https://github.com/JSebastianPulgarin/bia-technical-test/assets/45098556/8077c145-0d51-41bb-9d43-6c1358757bcf)

