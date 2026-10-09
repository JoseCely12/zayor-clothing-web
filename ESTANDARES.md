# ESTANDARES.md — Equipo Zayor Clothing

**Proyecto:** Zayor Clothing — Desarrollo de Interfaz Web **Integrantes:** José Cely y Juan Diego González **Tecnologías del proyecto:** HTML5, CSS3, JavaScript/React, Tailwind CSS y Figma **Cliente:** José Cely (propietario/fundador de Zayor Clothing)

Este documento recoge los acuerdos que hicimos como equipo para trabajar de forma ordenada durante el proyecto. Intentamos que todo se pueda comprobar abriendo el repositorio, sin tener que preguntarnos a nosotros.

## 1. Guía de estilo y nombres

### 1.1 Guía oficial que adoptamos

- **JavaScript y React:** usamos la Airbnb JavaScript Style Guide, incluida su parte de React. Elegimos esta porque es muy conocida y trae reglas ya hechas, así no tenemos que inventarlas.

- **CSS:** como usamos Tailwind CSS, escribimos los estilos con las clases de Tailwind. Solo usamos CSS propio cuando Tailwind no alcance, y ese CSS va en un solo archivo (src/index.css).

### 1.2 Idioma del código

- **El código va en inglés:** nombres de variables, funciones, componentes, carpetas y archivos.

- **Los comentarios, el README y los mensajes de commit van en español**, porque es el idioma en que trabajamos todos y el cliente.

- El texto que ve el usuario final en la página (títulos, botones, descripciones de prendas) va en español.

### 1.3 Formateador y revisor de código

- **Prettier** da formato automático al código. Su configuración está en el archivo .prettierrc del repositorio.

- **ESLint** (con la configuración de Airbnb) avisa de errores y de cosas que no siguen la guía. Su configuración está en el archivo de ESLint del repositorio.

- En el package.json hay tres scripts para correrlos: npm run lint, npm run format y npm run format:check.

### 1.4 Tres reglas propias de nombres

1.  **Los componentes de React se escriben en PascalCase y cada uno va en su propio archivo con el mismo nombre.** Ejemplo: el componente ProductCard está en ProductCard.jsx.

2.  **Las variables y funciones van en camelCase. Las funciones empiezan con un verbo y las variables booleanas empiezan con is o has.** Ejemplos: getProductsByCategory(), isCartEmpty, hasDiscount.

3.  **Las imágenes de las prendas van en minúsculas, separadas con guiones y siguiendo el formato prenda-color-vista.webp.** Ejemplo: camiseta-negra-frente.webp. No se permiten espacios ni tildes en los nombres de archivo.

## 2. Convención de commits y ramas

### 2.1 Formato del mensaje de commit

Usamos la idea de **Conventional Commits**. El formato es:

tipo(alcance): descripción corta en español

- La descripción empieza con un verbo en infinitivo o en presente, va en minúscula y no pasa de 72 caracteres.

- El alcance es opcional, pero ayuda. Ejemplos: catalogo, carrito, detalle-producto, navbar.

**Ejemplos:**

feat(catalogo): agregar filtro por categorías

fix(carrito): corregir el total cuando se elimina un producto

docs: actualizar README con pasos de instalación

### 2.2 Tipos permitidos

| **Tipo** | **Cuándo se usa**                                                     |
|----------|-----------------------------------------------------------------------|
| feat     | Se agrega una funcionalidad nueva                                     |
| fix      | Se corrige un error                                                   |
| docs     | Cambios solo en documentación                                         |
| style    | Cambios de formato que no alteran el funcionamiento (espacios, comas) |
| refactor | Se reorganiza el código sin cambiar lo que hace                       |
| test     | Se agregan o cambian pruebas                                          |
| chore    | Tareas de mantenimiento (dependencias, configuración)                 |

### 2.3 Esquema de ramas

- main: rama estable. Aquí solo entra código revisado y aprobado. **Nadie hace commit directo a main.**

- feature/nombre-corto: para funcionalidades nuevas. Ejemplo: feature/catalogo-categorias.

- fix/nombre-corto: para corregir errores. Ejemplo: fix/menu-movil.

- docs/nombre-corto: para cambios de documentación. Ejemplo: docs/estandares.

Los nombres de rama van en minúsculas y con guiones. Cada rama se une a main mediante un **Pull Request (PR)** y se borra después de unirse.

**Nota:** para el primer commit de este documento (cuando todavía no existe una rama de docs), el mensaje será: docs: agregar ESTANDARES.md del equipo.

## 3. Definition of Ready (DoR)

Una tarea está **lista para empezar** cuando cumple estas 6 condiciones. Todas se pueden ver en el Issue de GitHub de la tarea.

1.  La tarea está escrita como un Issue de GitHub con el formato "Como \[tipo de usuario\] quiero \[acción\] para \[beneficio\]".

2.  El Issue tiene una lista de **criterios de aceptación** con al menos 2 puntos, escritos como casillas marcables (- \[ \]).

3.  Si la tarea toca la interfaz, el Issue tiene el enlace al diseño de **Figma** correspondiente.

4.  Si la tarea usa información del cliente (fotos, nombres o precios de prendas), esa información ya está en el repositorio o enlazada en el Issue.

5.  El Issue tiene una persona responsable asignada y una etiqueta de prioridad (alta, media o baja).

6.  El Issue tiene una estimación en horas, y esa estimación no es mayor a 8 horas. Si es mayor, la tarea se divide en varios Issues.

## 4. Definition of Done (DoD)

Una tarea está **terminada** cuando cumple estas 8 condiciones. Cualquier persona puede comprobarlas abriendo el repositorio.

1.  **Criterios de aceptación cumplidos:** todas las casillas del Issue están marcadas.

2.  **Lint limpio:** npm run lint termina con 0 errores, y el check de GitHub Actions del PR aparece en verde.

3.  **Formato correcto:** npm run format:check no reporta archivos sin formatear.

4.  **Compila:** npm run build termina sin errores.

5.  **Responsivo (si toca la interfaz):** el PR incluye capturas de pantalla en tres anchos: 375 px (celular), 768 px (tablet) y 1280 px (escritorio).

6.  **Revisado:** el PR tiene al menos 1 aprobación de la otra persona del equipo (no del autor).

7.  **Commits correctos:** todos los commits del PR siguen la convención de la sección 2 (se puede ver con git log).

8.  **Integrado y cerrado:** el PR está unido a main y el Issue quedó cerrado automáticamente con Closes \#N en la descripción del PR.

## 5. Política de revisión

### 5.1 Quién revisa

Somos dos, así que **siempre revisa la otra persona**. Nadie aprueba su propio PR.

### 5.2 Plazo

- La revisión se hace dentro de **48 horas** desde que se abre el PR.

- Si pasan 48 horas sin respuesta, el autor le escribe a su compañero para recordárselo.

- Si pasan **72 horas** sin respuesta, el autor puede unir el PR a main por su cuenta **solo si** todos los checks están en verde, y debe dejar un comentario en el PR diciendo que lo hizo por falta de respuesta. (Lo pusimos para que el proyecto no se quede parado si alguno se enferma o tiene examenes.)

### 5.3 Qué bloquea el PR

El revisor **debe pedir cambios** y el PR no se une si pasa alguna de estas cosas:

- npm run lint o npm run build fallan.

- No se cumple algún criterio de aceptación del Issue.

- La interfaz se rompe en celular, tablet o escritorio (se ve en las capturas o al probarlo).

- Hay contraseñas, claves o datos privados dentro del código.

- El PR tiene conflictos con main sin resolver.

- El PR no incluye las capturas de pantalla que pide la DoD (cuando toca la interfaz).

### 5.4 Qué NO bloquea el PR

Estas cosas se pueden comentar, pero **no impiden aprobar**:

- Preferencias personales que no están en la guía de estilo.

- Nombres de variables que no son los que el revisor habría elegido, pero que siguen las reglas de la sección 1.

- Ideas para mejorar algo en el futuro.

- Errores de ortografía en comentarios.

### 5.5 Cómo se comenta

- Los comentarios se hacen **en el PR de GitHub, sobre la línea de código**, no por WhatsApp.

- Cada comentario empieza con una etiqueta:

  - \[bloqueante\]: hay que arreglarlo antes de unir.

  - \[sugerencia\]: es opcional.

  - \[pregunta\]: el revisor no entiende algo y quiere que se lo expliquen.

- Los comentarios se escriben con respeto, explicando **por qué** y, si se puede, proponiendo cómo arreglarlo. Se critica el código, no a la persona.

- El autor responde cada comentario o lo marca como resuelto cuando haga el cambio.

## 6. Aceptación

Con nuestro nombre completo confirmamos que leímos este documento y que lo vamos a cumplir durante todo el proyecto.

| **Nombre completo** | **Aceptación**                    | **Fecha** |
|---------------------|-----------------------------------|-----------|
| José Cely           | Conozco y acepto estos estándares |           |
| Juan Diego González | Conozco y acepto estos estándares |           |
