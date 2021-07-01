# We Frogger
### **Product Owner: Daniel Alejandro Mejía Rojas**
### Antecedentes: Frogger. 
## Resumen
We Frogger se basa en el popular juego de los años 80 Frogger, el cual consiste en guiar a una rana a través hasta su hogar, para esto debe evitar coches mientras cruza una carretera congestionada y luego cruzar un rio lleno de amenazas. El jugador hábil obtendrá puntos adicionales a lo largo del camino.

## Descripción
![Frogger](https://upload.wikimedia.org/wikipedia/en/c/cd/Frogger_game_arcade.png)

Tiene un máximo de dos jugadores, que jugaran al mismo tiempo y ambos deberán llegar a los 5 hogares que se encuentran disponibles, dentro de un tiempo determinado. Cada uno comienza con 3 ranas. El jugador guía una rana que comienza en la parte inferior de la pantalla. Hay que cruzar una calle llena de distintos vehículos entre los cuales se incluyen coches, camiones, autobuses, camiones, taxis y motocicletas. Lo siguiente es un rio lleno de troncos, lagartos y tortugas. En lo más alto de la pantalla están los cinco hogares de las ranas. 

![Carros](https://3.bp.blogspot.com/-MXpDul01HxM/TYcgzO6xp2I/AAAAAAAAV5w/6Jb_ZfvDRb8/s400/Head.png)

El único control que el jugador tiene son las teclas W (Arriba), A (Izquierda), S (Abajo) y D (Derecha). Cada una hace que la rana vaya en la dirección especificada. Se debe guiar  a la rana evitando ser atropellada en camino, devorada por cocodrilos o ahogada en el río (la rana no sabe nadar). A mitad de camino, después de cruzar la calle, hay un lugar intermedio, donde a veces hay una serpiente, el jugador debe seguir para atravesar el río brincando sobre los troncos o caparazones de tortugas que aveces se hunden en la profundidad del rio. Sobre el mapa irán apareciendo de manera aleatoria distintos poderes que podrán utilizar las ranas para cumplir con el objetivo de llegar a sus hogares, entre los poderes se incluyen invulnerabilidad, nado, velocidad, y ralentizar los vehículos, troncos y cocodrilos que facilitaran el objetivo.

![Troncos](https://4.bp.blogspot.com/-_JNmwFdhLyk/TYcfMdHloaI/AAAAAAAAV5o/KLZzGm4IkQU/s400/frogger-2.png)

## Diagrama de Clases

![ClassDiagram](/Images/WeFroggerDiagram.png)

* WeFrogger: Clase principal la cual contendrá el tablero de juego.
* BoardGame: Tablero de juego el cual contendrá a los jugadores representados por las ranas, plataformas, vehiculos y diferentes zonas de juego.
* Frog: Clase que representara a los jugadores como ranas.
	* Player1: Clase que contendrá las funcionalidades del jugador1
	* Player2: Clase que contendrá las funcionalidades del jugador1
* Vehicle: Interfaz la cual contendrá, de manera general, las funcionalidades de todos los tipos de vehículos.
	* Truck: Clase que representara al camión el cual será de movilidad lenta.
	* Cars: Clase que contendrá la funcionalidad de manera general de los carros.
		* NormalCar: Clase que representará al carro el cual será de movilidad normal.
		* ReverseCar: Clase que representará al carro el cual será de movilidad normal, pero irá en dirección contraria.
	* Bike: Clase que representara a las motos, serán de movilidad rápida.
	* Bus: Clase que representara a los buses, serán de movilidad lenta pero tendrán un mayor tamaño.
* Powers: Interfaz que contendrá la funcionalidad, de manera general, de los poderes que le serán útiles a los jugadores.
	* Swim: Permitirá a la rana nadar sobre el río, mientras no muera por otras circunstancias.
	* Invincibility: Permitirá que la rana no pueda morir por un tiempo.
	* Fast: Permitirá que la rana se mueva mas rápido.
* Zones: Interfaz que delimitara el tablero por zonas.
	* SafeZone: Clase que representará zonas en donde la rana no puede morir.
	* WinZone: Clase que representará los hogares de las ranas.
	* DeathZone: Zonas donde la rana si o si morirá, ejemplo el río al no estar en una plataforma.
* Platform: Interfaz que contendrá la funcionalidad, de manera general, de las distintas plataformas que ayudaran a la rana a ir a su hogar o devorarla en el caso de ser un animal.
	* Trunk: Interfaz que contendrá la funcionalidad de los troncos.
		* SmallTrunk: Clase que representara un tronco de tamaño pequeño
		* NormalTrunk: Clase que representara un tronco de tamaño normal
	* Turtle: Clase que representará a las tortugas, estas se podrán hundir despues de cierto tiempo.
	* Cocodrile: Clase que representará a el cocodrilo, si este tiene la boca abierta devorará a la rana, abrira y cerrara la boca despues de un tiempo.

## Historias de Usuario
* Crear una sala en la que se puedan invitar otros jugadores:
Como Jugador quiero crear una sala en la que pueda invitar a otro jugador para poder jugar con este. 
	* **Estimación:**  16
	* **Criterios de Aceptación:**
		* El Jugador previamente debió haber registrado su nickname.
		* Agregar un usuario por su nickname a la sala.  
	* **Valor:** 10
* El jugador puede unirse a una sala:
	Como Jugador quiero poder unirme a otras salas para poder jugar con otros jugadores.
	* **Estimación:** 16
	*  **Criterios de Aceptación:**
		* El Jugador previamente debió haber registrado su nickname.
		* Unirse a una sala por medio del id de la sala.
	* **Valor:** 10
*  Jugar Frogger
Como jugador quiero poder jugar Frogger para poder jugar con mis amigos o gente desconocida.
	* **Estimación:** 24
	* **Criterios de Aceptación**
		* Los jugadores deben poder verse en tiempo real jugando.
	* **Valor:** 20
* El jugador debe morir con un vehiculo, ahogandose o por un cocodrilo.
	Como Product Manager quiero que los jugadores mueran para poder aumentar la dificultad del juego.
	* **Estimación:** 8
	* **Criterios de Aceptación:**
		* El jugador debe morir al posarse sobre el río.
		* El jugador debe morir al posarse sobre un cocodrilo con la boca abierta.
		* El jugador debe morir al ser atropellado por un vehículo.
	* **Valor:** 10
* El jugador debe ganar si los hogares están llenos:
	Como jugador quiero ganar si los hogares están llenos para poder cumplir con el objetivo del juego
	* **Estimación:**	8
	* **Criterios de Aceptación:**
		* Cuando los 2 jugadores llenen las 5 casas deberían ganar la partida
	* **Valor:** 10
* El jugador debe poder obtener poderes generados en el mapa de manera aleatoria:
	Como jugador quiero obtener poderes generados por el mapa para poder cumplir con el objetivo del juego
	* **Estimación:** 8
	* **Criterios de Aceptación:**
		* El jugador al posarse encima de un poder debe obtenerlo
		* Los poderes se deben generar en cualquier lugar del mapa
		* Debe mostrarse el poder que tiene actualmente el jugador
	* **Valor:** 10
