## Documentación de la API de Blog 12/11/2025

Esta documentación describe la interfaz RESTful de la API para la gestión de Autores y Posts desarrollada en Express. 
El **endpoint base** para todas las peticiones es `http://localhost:3000/api`.


### **1. Gestión de Autores**

El recurso `/autores` permite listar, ver detalles e insertar nuevos autores.

### 1.1. Obtener todos los Autores

Devuelve una lista de todos los autores.

* **Método:** `GET`
* **Ruta:** `/autores`
* **Ejemplo de Petición:** `GET {{URL}}/autores`
* **Respuesta Exitosa (200 OK):** Devuelve un array de objetos autor.
* **Respuesta de Error (500 Internal Server Error):** Indica un problema en el servidor.

### 1.2. Obtener Autor por ID

Devuelve los detalles de un autor específico.

* **Método:** `GET`
* **Ruta:** `/autores/:autorId`
* **Ejemplo de Petición:** `GET {{URL}}/autores/3`
* **Parámetros de Ruta:**
    * `autorId`: ID único del autor (**Numérico**).
* **Respuesta Exitosa (200 OK):** Devuelve un objeto autor.
* **Respuesta de Error (404 Not Found):** `{"message": "Autor no existe"}`

### 1.3. Crear un Nuevo Autor

Permite insertar un nuevo autor en la base de datos.

* **Método:** `POST`
* **Ruta:** `/autores`
* **Content-Type:** `application/json`
* **Cuerpo de la Petición:**
    ```json
    {
      "nombre": "Nombre del Autor",
      "email": "autor@blog.com",
      "imagen": "[https://url.de.la.imagen](https://url.de.la.imagen)"
    }
    ```
* **Respuesta Exitosa (200 OK):** Devuelve el objeto del autor recién creado.
* **Respuesta de Error (500 Internal Server Error):** Indica un fallo en la inserción.

---

### **2. Gestión de Posts**

El recurso `/posts` permite listar, filtrar y crear nuevas publicaciones.

### 2.1. Obtener todos los Posts

Devuelve una lista de todos los posts, incluyendo la información relacionada del autor.

* **Método:** `GET`
* **Ruta:** `/posts`
* **Ejemplo de Petición:** `GET {{URL}}/posts`
* **Respuesta Exitosa (200 OK):** Devuelve un array de objetos post con detalles del autor.
* **Respuesta de Error (500 Internal Server Error):** Indica un problema en la conexión o consulta a la base de datos.

### 2.2. Obtener Post por ID

Devuelve los detalles de un post específico.

* **Método:** `GET`
* **Ruta:** `/posts/:postId`
* **Ejemplo de Petición:** `GET {{URL}}/posts/29`
* **Parámetros de Ruta:**
    * `postId`: ID único del post (**Numérico**).
* **Respuesta Exitosa (200 OK):** Devuelve un objeto post.
* **Respuesta de Error (404 Not Found):** `{"message": "Post id no existe"}`

### 2.3. Obtener Posts por Autor

Devuelve todos los posts escritos por un autor específico.

* **Método:** `GET`
* **Ruta:** `/posts/byAutor/:autorId`
* **Ejemplo de Petición:** `GET {{URL}}/posts/byAutor/30`
* **Parámetros de Ruta:**
    * `autorId`: ID del autor cuyos posts se desean obtener (**Numérico**).
* **Respuestas de Error:**
    * **400 Bad Request:** `{"error": "ID de autor no válido."}`
    * **404 Not Found:** `{"message": "No se encontraron posts para el autor con ID [X]."}`
    * **500 Internal Server Error:** Fallo en la base de datos.

### 2.4. Crear un Nuevo Post

Permite insertar un nuevo post.

* **Método:** `POST`
* **Ruta:** `/posts`
* **Content-Type:** `application/json`
* **Cuerpo de la Petición:**
    ```json
    {
      "titulo": "Mi Nuevo Post",
      "descripcion": "Contenido del post...",
      "autores_id": 30,
      "categoria": "Desarrollo"
    }
    ```
* **Respuesta Exitosa (200 OK):** Devuelve el objeto del post recién creado.
* **Respuesta de Error (500 Internal Server Error):** `{"error": "Error al insertar el Post!"}`