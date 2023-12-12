console.log("Hola CH35")
/*
Control de flujo y estructuras de control
Las estructuras de control son un componente fundamental dentro de la programacion, entre algunas de las facilidades y ventajas que nos proporcionan para escribir y depurar codigo, podemos mencionar las siguientes:
- Tomar decisiones basadas en condiciones especificas, esto produce un codigo
 * tanto dinamico como adaptable
 * 
 * - Repetir acciones (estructuras de bucle) para iterar operaciones o procesar datos
 * de una forma eficiente sin caer en la redaccion de codigo innecesario y repetitivo
 * 
 * - Facilitar el control de flujo de una operacion, brindandonos la oportunidad de ser
 * especificos en indicar qe instrucciones ejecutar y en que orden
 * 
 * - Optimizan el rendimiento de nuestro codigo, ya que evita oportunamente ejecutar instrucciones
 * en caso de que no se necesite
 * 
 * - Facilitar tanto la escritura de codigo como la claridad de este
 * 
 * Las estructuras de control que vamos a ver durante las sesiones de JS son las siguientes
 * 
 *      - Estructura if-else
 *      - Estructura switch
 *      - Estructuras de bucles (for, do, do while)
 * 
 * Para esta sesion, nos centraremos solo en las primeras 2 señaladas en la lista
 */


/*
Declaracion de sentencia if else
*palabra reservada if para comenzar la declaracion, se coloca un parentesis () donde se debe colocar una expresion logica (True/false), se abren y cierran llaves para indicar que sentencia va a ejecutar si la condicion se cumple (true).
*despues de la llave {} declarada para el bloque de ejecucion if, colocamos la palabra reservada else, para este ejenplo no es necesario colocar mas expresiones dentro de un () **simplemente colocamos otras llaves {} para indicar el bloque de codigo que tiene que ser ejecutado en caso de que la condicion no se cumpla (false).
*/
//declaracion de variable
let n = 15; 
if (n > 20) {
    console.log(true);
} else {
    console.log(false);
}
 /* 
 * Se trata de la misma sentencia if-else declarada anteriormente
 * Lo que vamos a hacer diferente es, en este caso, anidar varias veces
 * esta misma sentencia, lo que nos permitira tomar decisiones
 * mas complejas
 * 
 * Usaremos la contatenación.
 * Concatenar es una elegante palabra de la programación que significa: "unir". Para unir cadenas en JavaScript el símbolo de más (+), el mismo operador que usamos para sumar números, pero en este contexto hace algo diferente.
 * 
 * Hay que tener cuidado y no realizar demasiadas anidaciones, ya que va a resultar
 * en codigo poco legible y confuso
 */
//if anidados

let edad = 67;
if (edad < 18){
    console.log("Eres menor de edad, retirate");
} else if (edad >= 18 && edad < 65){
    console.log("Eres un adulto joven");
}else{
    console.log("Eres un adulto mayor");
}
 /*
 *Sentencia Switch 
 *La sentenciia switch es otro tipo de estructura de control de flujo, que, nuevamente se encuentra en diversos lenguajes de programacion.
 *Es bastante parecida a la sentencia if-else, pero diferente en cuanto a comportamiento, ya que no se basa en una bifurcacion (particion de caminos), sino que secciona en multiples casos (case) que, dependiendo de la expresion que cumpla con un caso especifico, sera la secuencia que se va a ejecutar, dentro de la declaracion.
 *Declaracion:
 *se empieza por colocar la palabra reservada switch, seguida de esto, colocamos parentesis () donde se debe colocar el valor que va a indicar que sentencia / caso a ejecutar.
 *falta indicar el bloque de codigo que se limita a esta sentencia, como la hicimos en la sentencia if o con las funciones. 
 *Dentro de este bloque de codigo, falta colocar los casos para cada valor que se desee, establecer segun sea el valor indicado dentro de el parentesis ().
 *Cada uno de estos casos se separa de la siguiente manera:
 *case valor : instruccion a ejecutar si el valor empata con este caso.
 *Despues, para indicar que la ejecucion de las sentencias debe cortarse cuando se cumpla, se coloca la instruccion *break
 *cuando terminemos de establecer los casos que necesitamos declara, dentro de nuestra sentencia, debemos colocar un valor por defecto, default.
 *esta ultima sentencia nos permite establecer un valor por defecto, si es que este valor colocado no empata con ningun otro dentro de la sentencia o en ninguno de los casos.
 default: mensaje no disponible
 */

 let dia = "domingo";
 switch (dia){
    case "lunes" :
        console.log("Odio los lunes att: Garfield");
        break;
    case "martes" :
        console.log("quien avienta cuetes los martes?");
        break;
    case "miercoles" :
        console.log("Toca presentar e proyecto :(");
        break;
    case "Jueves" :
        console.log("Juevebes casi viernes");
        break;
    case "Viernes" :
        console.log("Viernes de disfraces");
        break;
    case "Sabado" :
        console.log("Sabadrink y taquitos");
        break;
    case "domingo" :
        console.log("Domingo de resurreccion")
        break;
 } //termina switch
 //  OPERADOR TERNARIO
/**
 *Expresión condicional if-else más simple y legible
 - Principalmente se usa para simplificar condiciones de una sola expresión
 - También puede anidar sentencias if-else-if, sin embargo, no es recomentdado poque el código se puede volver confuso y poco legible.
  - Su declaración es la siguiente:
  - Palabra reservada var, let o const
  Se le asigna un nombre como sei se tratara de una variable, operador de asignación "=", seguido de este operador, hay que colocar una expresión lógica, esta va dentro de un paréntesis  () después hay que colocar un caracter ? que indica el camino a seguir, dependiendo de si, se cumple (o no ) la expresión.
  Para separar el resultado true de false debemos agregar un caracter de :, del lado izquiero se coloca la sentencia a ejecutar.
  Si se cumple la condición, del lado derecho se coloca la sentencia a ejecutar
 */

 //ejemplo de operador ternario
 let verifiacion = n > 5 ? "si es mayor " : "no es mayor"
 console.log(verifiacion);
