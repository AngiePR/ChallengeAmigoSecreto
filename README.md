<h1 align="center"> Challenge Amigo Secreto </h1>

Autora del archivo app.js: Angelica Pedroza

![imagen de portada de la página "Amigo Secreto"](https://github.com/AngiePR/ChallengeAmigoSecreto/blob/main/img_portada.png)

Repositorio para desarrollar el Challenge "Amigo Secreto", proyecto de alura para finalizar la formación "Principiante en programación" en el programa Oracle Next Education G8. Con este proyecto se busca reforzar lo aprendido en los cursos de lógica de programación en JavaScript. Este Challenge consiste en una aplicación que permita a los usuarios ingresar nombres de sus amigos en una lista y luego realizar un sorteo aleatorio para determinar quien es el amigo secreto. La aplicación debe permitir que se agreguen nombres a través de un campo de texto y un botón llamado "añadir". Los nombres ingresados se mostrarán en una lista visible en la página, debajo del campo de entrada.

<h4 align="center">
:sparkles: Funciones :sparkles:
</h4>
En este proyecto se utilizan 3 funciones, las cuales son la base para que la aplicación cumpla con las características mencionadas en la aplicación, a continuación se describe su funcionamiento:

<h5 align="center">
:star: agregarAmigo :star:
</h5>

Permite al usuario ingresar un nombre en el campo de texto y añadirlo a la lista de amigos creada.

<h5 align="center">
:star: actualizarLista :star:
</h5>

Recorre el array "amigos" y agrega cada nombre como un elemento "\<li>" dentro de una lista HTML. Usa innerHTML para limpiar la lista antes de agregar nuevos elementos.

<h5 align="center">
:star: sortearAmigo :star:
</h5>

Selecciona de manera aleatoria uno de los nombres almacenados en el array "amigos". Usa Math.random() y Math.floor() para obtener un índice aleatorio.

<h4 align="center">
✳️ Otras consideraciones ✳️
</h4>

El programa detecta si se ingresó una cadena vacía o números en lugar de letras, para que se ingresen nombres válidos a la lista de amigos.

Después de escribir un nombre o un dato no válido, el campo de escritura se queda en blanco esperando el siguiente nombre.

<h4 align="center"> 
:hammer_and_pick: Ejemplos de ejecución :hammer_and_pick:
</h4>

<h5 align="center">
:star: Ingreso de nombre no válido :star:
</h5>

![Ejemplo1](https://github.com/user-attachments/assets/c25bc7bd-4d70-4592-8316-b2bc0b0b1b9e)

<h5 align="center">
:star: Ingreso de nombres y muestra de lista en la parte inferior :star:
</h5>

![Ejemplo2](https://github.com/user-attachments/assets/1308cbbf-ab7c-4e77-af39-cfaddf122508)

<h5 align="center">
:star: Campo en blanco después de ingresar todos los nombres :star:
</h5>

![Ejemplo3](https://github.com/user-attachments/assets/8e4bb620-81a4-401e-a780-8286b4086433)

<h5 align="center">
:star: Amigos sorteados :star:
</h5>

![Ejemplo4](https://github.com/user-attachments/assets/07fc721b-7686-4745-aeab-90990a5d2416)

![Ejemplo5](https://github.com/user-attachments/assets/b263446c-964c-450a-86d0-9031621657bf)
