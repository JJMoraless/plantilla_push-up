## Filtro mongodb:  M3 jhon jairo morales garcia

filtro campus node mongodb
- antes de usar debe instalar dependencias con ``` npm i```
- debe ejcutar el proyecto ``` npm run dev```

- la api tiene passport jwt bearer y local
- tiene versionamiento pero solo tiene una version : 1.0.0
- tiene dto o validaciones 
- usa express validator 

- #### (solo los usuarios registrados con rol admin pueden usar los endpoints, los demas roles no)

- #### si algun endpoint no le bota los datos es por que hay insertar mas documentos, por favor ingreselos para que se pueda ver el filtrado y las consultas de mejor manera, no alcance a ingresar mas documentos debido al tiempo (borre las colecciones que tenia para crear el shema de mongo db)

- antes de usar cualquier endpoint debe registrar un usuario en este endpoint ``` localhost:1234/users ``` con su password, email y rol. debe recordar la contraseña ya que se encripta cuando se guarda a la base de datos y no podra verla desde ahi 

-despues debe autenticarse y recibir el token en este endpoint 
``` localhost:1234/auth/login ```





## Endpoints Documentacion

```JSON
{
    "client": "Thunder Client",
    "requests": [
        {
            "name": "Encontrar todos los ingredientes con stock menor a 400",
            "url": "localhost:1234/ingredientes/stock40",
            "method": "GET",
        },
        {
            "name": "Encontrar todos los ingredientes con stock menor a 400 Copy",
            "url": "localhost:1234/ingredientes/stock40",
            "method": "GET",
        },
        {
            "name": "Encontrar todos los chefs que se especializan en \"Carnes\"",
            "url": "localhost:1234/chefs/especialidad/carnes",
            "method": "GET",
        },
        {
            "name": "Aumentar en 1.5 el precio de todos los ingredientes",
            "url": "localhost:1234/ingredientes/increment",
            "method": "GET",
        },
        {
            "name": "Encontrar el nombre y la descripción de todas las categorías",
            "url": "localhost:1234/hamburguesas/categorias",
            "method": "GET",
        },
        {
            "name": "Encontrar el nombre y la descripción de todas las categorías Copy",
            "url": "localhost:1234/ingredientes/deleteStock0",
            "method": "DELETE",
        },
        {
            "name": "Agregar un nuevo ingrediente a la hamburguesa \"Clásica\"",
            "url": "localhost:1234/hamburguesas/clasica/ingredientes",
            "method": "PUT",
        },
        {
            "name": "Encontrar todas las hamburguesas que contienen \"Pan integral\" como ingrediente",
            "url": "localhost:1234/hamburguesas/ingredientes/pan_integral",
            "method": "GET",
        },
        {
            "name": "Cambiar la especialidad del \"ChefC\" a \"Cocina Internacional\"",
            "url": "localhost:1234/chefs/especialidad/change/chefc",
            "method": "PUT",
        },
        {
            "name": "Encontrar el ingrediente más caro",
            "url": "localhost:1234/ingredientes/precios/masCaro",
            "method": "GET",
        },
        {
            "name": "Encontrar las hamburguesas que no contienen \"Queso cheddar\" como ingrediente",
            "url": "localhost:1234/hamburguesas/ingredientes/no_chedar",
            "method": "GET",
        },
        {
            "name": "Incrementar el stock de \"Pan\" en 100 unidades",
            "url": "localhost:1234/ingredientes/pan/increment",
            "method": "GET",
        },
        {
            "name": "Encontrar todos los ingredientes que tienen una descripción que contiene la palabra \"clásico\"",
            "url": "localhost:1234/hamburguesas/precio9",
            "method": "GET",
        },
        {
            "name": "Contar cuántos chefs hay en la base de datos",
            "url": "localhost:1234/chefs/total",
            "method": "GET",
        },
        {
            "name": "Eliminar las hamburguesas que contienen menos de 5 ingredientes",
            "url": "localhost:1234/hamburguesas/categorias/gourmet",
            "method": "GET",
        },
        {
            "name": "Agregar un nuevo chef a la colección con una especialidad en \"Cocina Asiática\"",
            "url": "localhost:1234/chefs/cocina_asiatica",
            "method": "POST":
                "type": "json",
                "raw": "{\n  \"nombre\": \"pepe\"\n}",
            }
        },
        {
            "name": "Listar las hamburguesas en orden ascendente según su precio",
            "url": "localhost:1234/hamburguesas/precios/order",
            "tests": []
        },
        {
            "name": "Encontrar todos los ingredientes cuyo precio sea entre $2 y $5",
            "url": "localhost:1234/ingredientes/precios/beetwen2y25",
        
        },
        {
            "name": "Actualizar la descripción del \"Pan\" a \"Pan fresco y crujiente\"",
            "url": "localhost:1234/ingredientes/pan/descripcion/to_crugiente",
            "method": "PUT",
        },
        {
            "name": "Encontrar todas las hamburguesas que contienen \"Tomate\" o \"Lechuga\" como ingredientes",
            "url": "localhost:1234/hamburguesas/tomateOlechuga",
            "method": "GET",
        },
        {
            "name": "Listar todos los chefs excepto \"ChefA\"",
            "url": "localhost:1234/chefs/noChefA",
            "method": "GET",
        },
        {
            "name": "Incrementar en $2 el precio de todas las hamburguesas de la categoría \"Gourmet\"",
            "url": "localhost:1234/hamburguesas/gourmet/increment2",
            "method": "PUT",
        },
        {
            "name": "Encontrar la hamburguesa más cara",
            "url": "localhost:1234/hamburguesas/mas_cara",
            "method": "GET",
        },
        {
            "name": "Agregar \"Pepinillos\" a todas las hamburguesas de la categoría \"Clásica\"",
            "url": "localhost:1234/hamburguesas/pepinillosToClasica",
            "method": "PUT",
        },
        {
            "name": "Eliminar todos los chefs que tienen una especialidad en \"Cocina Vegetariana\"",
            "url": "localhost:1234/chefs/vegetarianos",
            "method": "DELETE",
        },
        {
            "name": "Encontrar todas las hamburguesas que contienen exactamente 7 ingredientes",
            "nota": "error de ultima hora y no alance a corregir por tiempo (encuentra por los que tienen 5 ingredientes exactamente)"
            "url": "localhost:1234/chefs/",
            "method": "GET",
        },
        {
            "name": "Encontrar la hamburguesa más cara que fue preparada por un chef especializado en \"Gourmet\"",
            "url": "localhost:1234/chefs/mas_cara_gourmet",
            "method": "GET",
        },
        {
            "name": "Listar los chefs junto con el número de hamburguesas que han preparado",
            "url": "localhost:1234/chefs/total_vendido",
            "method": "GET",
        },
        {
            "name": "Encontrar el precio promedio de las hamburguesas en cada categoría",
            "url": "localhost:1234/hamburguesas/promedioCategoria",
            "method": "GET",
        },
        {
            "name": "registro Usuarios",
            "url": "localhost:1234/users",
            "method": "POST",
                "type": "json",
                "raw": "{\n  \"email\": \"adasd@gmail.com\",\n  \"password\": \"123456\",\n  \"role\": \"admin\"\n}",
                "form": []
            },
            "tests": []
        },
        {
            "name": "auth",
            "url": "localhost:1234/auth/login",
            "method": "POST",
                "type": "json",
                "raw": "{\n  \"email\": \"adasd@gmail.com\",\n  \"password\": \"123456\"\n}",
                "form": []
            },
        }
    ]
}
```