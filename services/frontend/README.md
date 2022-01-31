# Frontend

## Dashboard

Es el nuevo "home", cuando el usuario entre será redirigido a esta página.
En esta se pueden visualizar las los gráficos en porcentajes, de la cantidad de estudios que tiene cada médico, el porcentaje de postivos y negativos y, positivos por gen. Para realizar esto se utilizó una biblioteca de vue llamada Vue-Chart. 
Además debajo de esto, se podrán ver el listado de los resultados que fue subiendo cada médico.

### Agregar resultado

Se estableció una pantalla nueva para agregar los resultados, para que al usuario no le resulte engorroso ver todo en el mismo lugar.
Cuando se quiere agregar un nuevo campo, el backend no esta preparado para recibir nada más que string, es decir, no acepta nada más de un contenido. 
Para solucionar esto, se crea un JSON que se convierte en string y cuando se lo pide para mostrarlo, se vuelve a convertir en JSON.

### Estilo en general

El estilo de la página es principalmente minimalista, con pocos colores y la utilización de recuadros como neomorfismo. Fue aplicado a todas las páginas para que tuvieran un estilo coherente.

```
Gracias por leer
```
