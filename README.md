## Ejercicio 1
Se desarrollará una sencilla webapp usando React y el API de pokemon PokeAPI. El servicio tiene limitado el número de peticiones así que usadlo con cuidado. Además, tenéis una copia del servicio también disponible en bajo la URL http://pokeapi.salestock.net/api/v2/
La app debe tener las siguientes características:
- Debe tener un listado de pokemon, donde debe aparecer al menos su foto, nombre, número y tipo (o tipos)
- Deben aparecer los 25 primeros pokemon (para tener la info detallada de cada uno, tendremos que hacer una petición al servidor y recordad que hay un límite)
- Los pokemon deben poder filtrarse por nombre


## Ejercicio 2 
Vamos a serguir explorando el API de pokemon PokeAPI
La app debe tener las siguientes nuevas características:
- En el listado principal debe aparecer, si el pokemon es una evolunción de otro, de cuál proviene
- Usaremos el router de React para que, al clickar sobre la tarjeta de un pokemon, aparezca una pantalla de detalle con más información detallada de ese pokemon. Os proponemos: altura, peso, habilidades, imágenes del pokemon y sus evoluciones
- Usar algún tipo de transición a vuestra elección al mostrar/ocultar el componente de detalle de pokemon
