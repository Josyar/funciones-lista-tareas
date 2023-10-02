¿Qué sucedio al usar async y await?

Cuando usamos async y await las operaciones asincrónicas (como agregar, eliminar o mostrar tareas) se ejecuten de manera más ordenada y fácil de seguir. El uso de async en funciones y await dentro de esas funciones permite que las tareas asincrónicas se realicen de manera secuencial, lo que hace que el código sea más legible y parecido a un programa sincrónico.

¿Qué sucedio al usar el método then()?

Si utilizáramos el método then() en el código, tendríamos que encadenar las promesas y proporcionar funciones de callback para manejar los resultados y los errores de las promesas. Esto podría hacer que el código sea más complejo y anidado, ya que tendríamos que lidiar con varias promesas anidadas. Aunque sería funcional, el código podría ser más difícil de leer y mantener en comparación con el uso de async/await.

¿Qué diferencias encontraste entre async, await y el método then()?

Sintaxis: async/await proporcionaría una sintaxis más clara y legible, ya que las operaciones asincrónicas se manejarían de manera secuencial en el flujo del programa. El método then() requeriría encadenar promesas y usar funciones de callback, lo que podría hacer que el código sea menos legible.

Ejecución secuencial: Con async/await, las operaciones asincrónicas se ejecutarían en un orden más natural y secuencial, similar a un programa sincrónico. Con el método then(), las promesas se ejecutarían en cadena, lo que podría dar lugar a una estructura de código más anidada.

Manejo de errores: async/await permitiría un manejo más claro y conciso de los errores mediante el uso de try-catch. El método then() requeriría el uso de la función catch(), lo que podría ser menos intuitivo y requerir más código para manejar errores.