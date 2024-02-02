# Intercambio de Libros.
<div style="text-align: justify">
Este proyecto es una aplicación web desarrollada con React en el frontend y Supabase en el backend que permite gestionar el intercambio de libros y autores.
</div>

>
>Por ahora solo tiene las funcionalidades que se describen a continuación

## Funcionalidades.
- ✅**Agregar un libro:** Los usuarios pueden agregar nuevos libros a la sistema proporcionando detalles como el título, el autor, la fecha de publicación y un resumen del libro.
- ✅**Agregar un autor:** Los usuarios pueden agregar nuevos autores a la sistema proporcionando detalles como el nombre y la biografía del autor.
- ✅**Ver la lista de libros:** Los usuarios pueden ver una lista de todos los libros disponibles en el sistema.
- ❌**Ver la lista de autores:** Los usuarios pueden ver una lista de todos los autores en el sistema.

## Instalación
<div style="text-align: justify">
Para instalar y ejecutar el proyecto, sigue estos pasos:
</div>

```bash
npm i
npm run dev
```

Agregar un archivo `.env` en la raíz del proyecto con las siguientes variables de entorno.

```bash
REACT_APP_SUPABASE_URL= #URL de la base de datos de Supabase
REACT_APP_SUPABASE_ANON_KEY= #Llave de acceso anónimo de la base de datos de Supabase
```
Utiliza esta sentencia SQL para generar las tablas necesarias en la base de datos de Supabase.

```sql
-- Crear la tabla de autores
CREATE TABLE authors (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);

-- Crear la tabla de libros
CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    author_id INTEGER REFERENCES authors(id),
    published_date DATE NOT NULL,
    summary TEXT
);

```

## Futuras Mejoras

- ❌**Búsqueda de libros:** Permitir a los usuarios buscar libros por título o autor.
- ❌**Edición de libros y autores:** Permitir a los usuarios editar los detalles de los libros y autores existentes.
- ❌**Eliminación de libros y autores:** Permitir a los usuarios eliminar libros y autores del sistema.
- ❌**Ver la lista de autores:** Permitir a los usuarios ver una lista de todos los autores en la sistema.
- ❌**Ver la lista de libros de un autor:** Permitir a los usuarios ver una lista de todos los libros de un autor en particular.
- ❌**Ver la lista de autores de un libro:** Permitir a los usuarios ver una lista de todos los autores de un libro en particular.
- ❌**Ver las datos a traves de páginas:** Permitir a los usuarios ver los datos a través de páginas.
- ❌**Autenticación de usuarios:** Permitir a los usuarios autenticarse en el sistema.
- ❌**Autorización de usuarios:** Permitir a los usuarios acceder a ciertas funcionalidades del sistema basadas en su rol.
- ❌**Agregar una base de datos de usuarios:** Permitir a los usuarios registrarse en el sistema.
- ❌**Agregar una base de datos de roles:** Permitir a los usuarios tener diferentes roles en el sistema.
- ❌**Agregar una base de datos de permisos:** Permitir a los usuarios tener diferentes permisos en el sistema.

## Contribución
<div style="text-align: justify">
Si deseas contribuir a este proyecto, por favor haz un fork del repositorio y envía un pull request con tus cambios.
</div>

## Licencia

Este proyecto está licenciado bajo los términos de la licencia MIT.