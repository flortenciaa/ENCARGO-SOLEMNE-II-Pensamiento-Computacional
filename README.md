# ENCARGO-SOLEMNE-II-Pensamiento-Computacional
# Toby's Path main menu

## Autor
**Florencia Guzmán**

---

## Descripción del proyecto

Este proyecto consiste en un sistema visual dinámico e interactivo desarrollado en p5.js, que simula el menú principal de un videojuego.

En la pantalla principal se observa un título y una serie de botones, donde el botón principal (Play) reacciona al pasar el cursor por encima (hover), cambiando su color. Al hacer click, se activa una animación donde un círculo crece hasta cubrir la pantalla, generando la transición hacia una nueva escena.

En la pantalla final se muestra un sistema generativo simple compuesto por múltiples círculos que cambian constantemente y de manera random en posición y tamaño.

---

## Referentes

![Referente](referente.jfif)

El proyecto se inspira en menús de videojuegos interactivos, donde los botones reaccionan al usuario y generan transiciones visuales. También se relaciona con sistemas generativos simples, donde reglas básicas producen variaciones visuales constantes.

---

## Descripción conceptual

El proyecto busca relacionarse con el diseño de interfaces y el diseño generativo. No copia una estética específica, sino que representa la lógica de interacción de un menú de videojuego mediante un sistema computacional dinámico.

Se trabajan principios como:
- Interactividad
- Repetición
- Variación
- Sistema de estados

---

## Principio de diseño

Se trabaja el principio de repetición y variación, donde múltiples elementos se generan mediante reglas, pero cambian constantemente en tamaño, posición y color según la interacción del usuario.

---

## Sistema de estados

El sistema funciona mediante tres estados principales:

- **menu:** se muestran el título y los botones interactivos  
- **animacion:** se genera una transición visual mediante un círculo que crece  
- **juego:** se despliega un sistema visual generativo dinámico  

---

## Sistema (Input / Proceso / Output)

### Input
- Movimiento del mouse  
- Click del mouse  

### Proceso
- Detección de hover mediante condicionales  
- Cambio de estado según interacción del usuario  
- Uso de loop (for) para generar múltiples elementos  
- Uso de random() para variar posiciones  
- Uso de map() para modificar el tamaño según la posición del mouse  

### Output
- Botones interactivos que reaccionan al cursor  
- Animación de transición  
- Sistema generativo de partículas que cambia constantemente  

---

## Interactividad

El usuario puede interactuar de las siguientes formas:

- Al pasar el cursor sobre el botón Play, este cambia de color  
- Al hacer click en el botón Play, se activa una animación de transición  
- Al mantener presionado el mouse, cambian los colores de las partículas  
- Al presionar la tecla espacio, se vuelve al menú principal  

---

## Problemas durante el proceso y soluciones

Durante el desarrollo del proyecto tuve varios errores que fui resolviendo:

### 1. Funciones mal ubicadas
Al principio definí funciones como `titulo()` dentro de `draw()`, lo que provocaba errores.

![Error funciones](error1.png)

**Solución:**  
Saqué todas las funciones fuera de `draw()`.

---

### 2. Error en el click del botón Play

El botón no reaccionaba porque no estaba asignando correctamente el cambio de estado.

![Error click](error3.png)

**Solución:**
```javascript
estado = "animacion";# ENCARGO-SOLEMNE-II-Pensamiento-Computacional
# Toby's Path main menu

## Autor
**Florencia Guzmán**

---

## Descripción del proyecto

Este proyecto consiste en un sistema visual dinámico e interactivo desarrollado en p5.js, que simula el menú principal de un videojuego.

En la pantalla principal se observa un título y una serie de botones, donde el botón principal (Play) reacciona al pasar el cursor por encima (hover), cambiando su color. Al hacer click, se activa una animación donde un círculo crece hasta cubrir la pantalla, generando la transición hacia una nueva escena.

En la pantalla final se muestra un sistema generativo simple compuesto por múltiples círculos que cambian constantemente y de manera random en posición y tamaño.

---

## Referentes

![Referente](referente.jfif)

El proyecto se inspira en menús de videojuegos interactivos, donde los botones reaccionan al usuario y generan transiciones visuales. También se relaciona con sistemas generativos simples, donde reglas básicas producen variaciones visuales constantes.

---

## Descripción conceptual

El proyecto busca relacionarse con el diseño de interfaces y el diseño generativo. No copia una estética específica, sino que representa la lógica de interacción de un menú de videojuego mediante un sistema computacional dinámico.

Se trabajan principios como:
- Interactividad
- Repetición
- Variación
- Sistema de estados

---

## Principio de diseño

Se trabaja el principio de repetición y variación, donde múltiples elementos se generan mediante reglas, pero cambian constantemente en tamaño, posición y color según la interacción del usuario.

---

## Sistema de estados

El sistema funciona mediante tres estados principales:

- **menu:** se muestran el título y los botones interactivos  
- **animacion:** se genera una transición visual mediante un círculo que crece  
- **juego:** se despliega un sistema visual generativo dinámico  

---

## Sistema (Input / Proceso / Output)

### Input
- Movimiento del mouse  
- Click del mouse  

### Proceso
- Detección de hover mediante condicionales  
- Cambio de estado según interacción del usuario  
- Uso de loop (for) para generar múltiples elementos  
- Uso de random() para variar posiciones  
- Uso de map() para modificar el tamaño según la posición del mouse  

### Output
- Botones interactivos que reaccionan al cursor  
- Animación de transición  
- Sistema generativo de partículas que cambia constantemente  

---

## Interactividad

El usuario puede interactuar de las siguientes formas:

- Al pasar el cursor sobre el botón Play, este cambia de color  
- Al hacer click en el botón Play, se activa una animación de transición  
- Al mantener presionado el mouse, cambian los colores de las partículas  
- Al presionar la tecla espacio, se vuelve al menú principal  

---

## Problemas durante el proceso y soluciones

Durante el desarrollo del proyecto tuve varios errores que fui resolviendo:

### 1. Funciones mal ubicadas
Al principio definí funciones como `titulo()` dentro de `draw()`, lo que provocaba errores.

![Error funciones](error1.png)

**Solución:**  
Saqué todas las funciones fuera de `draw()`.

---

### 2. Error en el click del botón Play

El botón no reaccionaba porque no estaba asignando correctamente el cambio de estado.

![Error click](error3.png)

**Solución:**
```javascript
estado = "animacion";
