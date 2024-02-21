## Estructura del Proyecto

Creamos carpetas específicas dentro del proyecto para organizar los componentes y servicios:

- **`countries`**: Carpeta para alojar componentes relacionados con países
- **`shared`**: Carpeta para componentes, servicios y páginas compartidos

## Componentes

Generamos componentes para diferentes partes de la aplicación:

1. **Páginas de la Aplicación:**

    - Home Page
    - About Page
    - Contact Page
    - By Capital Page
    - By Region Page
    - By Country Page
    - Country Page

2. **Sidebar:** 

    Componente que se muestra en todos las paginas, es responsive. La barra lateral aparece cuando la ventana es para móvil
    ```
    ng generate component shared/components/sidebar
    ```

## Enrutamiento

Configuramos el enrutamiento en `app-routing.module.ts` para navegar entre las páginas creadas

## Servicios y Modelos

1. **Servicio `CountryService`:** Para consumir una API REST y obtener datos de países

2. **Interfaz `Country`:** Para definir la estructura de datos de un país

## Detalle de País

Implementamos una funcionalidad para mostrar detalles de un país seleccionado, usando un enlace "Ver más..." en cada fila de la lista de países, pasando el id del país por URL

## Finalización

Completamos la aplicación implementando todos los componentes y servicios necesarios, y probamos la funcionañlidad de navegación y consumo de datos de la API

---