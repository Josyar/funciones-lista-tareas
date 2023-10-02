//importando el modulo readline
const readline = require('readline');

//interfaz de consola para interactuar en consola
const userInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

//array vacio para almacenar las tareas
const tasks = [];

//funcion para mostrar tareas
showTasks = () => {
    console.log("Lista de Tareas con Node:");
    tasks.forEach((task, index) => {
        const status = task.completed ? 'Completada' : 'Pendiente';
        console.log(`${index + 1}. [${status}] - ${task.description}`);
    });
}

//funcion para añadir una tarea
addTask = (description) => {
    tasks.push({
        description,
        completed: false,
    });
    console.log("Tarea añadida");
}

//funcion para eliminar tarea
deleteTask = (index) => {
    if (index >= 0 && index < tasks.length) {
        tasks.splice(index, 1);
        console.log("Tarea eliminada");
    } else {
        console.log("No hay tareas para eliminar");
    }
}

//funcion para marcar una tarea como completada
completeTask = (index) => {
    if (index >= 0 && index < tasks.length) {
        tasks[index].completed = true;
        console.log("Tarea marcada como completada");
    } else {
        console.log("No Tiene tareas pendientes");
    }
}

//logica para interactuar con el app

//recibir input para realizar una accion
whatToDoNext = () => {
    userInterface.question(
        "¿Que accion desea realizar?: (agregar/borrar/terminar/ver/salir) ",
        (action) => {
            switch (action) {
                case 'agregar':
                    userInterface.question("Nombre de la tarea: ", (description) => {
                        addTask(description);
                        whatToDoNext();
                    });
            break;
                case 'borrar':
                    showTasks();
                    userInterface.question("Indique cual tarea eliminar: ", (indexStr) => {
                        const index = parseInt(indexStr) - 1;
                        deleteTask(index);
                        whatToDoNext();
                    });
            break;
                case 'terminar':
                    showTasks();
                    userInterface.question("Indique cual tarea ya fue realizada: ", (indexStr) => {
                        const index = parseInt(indexStr) - 1;
                        completeTask(index);
                        whatToDoNext();
                    });
            break;
                case 'ver':
                showTasks();
                whatToDoNext();
            break;
                case 'salir':
                console.log("Saliendo del programa");
                userInterface.close();
            break;
                default:
                console.log("Solicite una de las acciones en la lista: (agregar/borrar/terminar/ver/salir)");
                whatToDoNext();
            break;
            }
        }
    );
}

//Ejecutar el app
whatToDoNext();



//usando asynk y await + el metodo then

/* 

const readline = require('readline');
const userInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const tasks = [];

function showTasks() {
    return new Promise((resolve, reject) => {
        if (tasks.length === 0) {
            reject("No hay tareas en la lista.");
        } else {
            const taskList = tasks.map((task, index) => {
                const status = task.completed ? 'Completada' : 'Pendiente';
                return `${index + 1}. [${status}] - ${task.description}`;
            });
            resolve(taskList.join('\n'));
        }
    });
}

function addTask(description) {
    return new Promise((resolve, reject) => {
        tasks.push({ description, completed: false });
        resolve(`Tarea "${description}" agregada.`);
    });
}

function deleteTask(index) {
    return new Promise((resolve, reject) => {
        if (index >= 0 && index < tasks.length) {
            const tareaEliminada = tasks.splice(index, 1);
            resolve(`Tarea "${tareaEliminada[0].description}" eliminada.`);
        } else {
            reject("Índice de tarea inválido.");
        }
    });
}

function completeTask(index) {
    return new Promise((resolve, reject) => {
        if (index >= 0 && index < tasks.length) {
            tasks[index].completed = true;
            resolve(`Tarea "${tasks[index].description}" marcada como completada.`);
        } else {
            reject("Índice de tarea inválido.");
        }
    });
}

async function main() {
    console.log("¡Bienvenido a la lista de tareas!");

    while (true) {
        try {
            const command = await askForCommand();
            switch (command) {
                case 'mostrar':
                    const taskList = await showTasks();
                    console.log(taskList);
                    break;
                case 'agregar':
                    const description = await askForDescription();
                    const addMessage = await addTask(description);
                    console.log(addMessage);
                    break;
                case 'eliminar':
                    const deleteIndex = await askForIndex();
                    const deleteMessage = await deleteTask(deleteIndex - 1);
                    console.log(deleteMessage);
                    break;
                case 'completar':
                    const completeIndex = await askForIndex();
                    const completeMessage = await completeTask(completeIndex - 1);
                    console.log(completeMessage);
                    break;
                case 'salir':
                    console.log("Saliendo del programa");
                    userInterface.close();
                    return;
                default:
                    console.log("Comando no válido. Pruebe con 'mostrar', 'agregar', 'eliminar', 'completar' o 'salir'.");
            }
        } catch (error) {
            console.error(error);
        }
    }
}

function askForCommand() {
    return new Promise((resolve) => {
        userInterface.question("Ingrese el comando: ", (command) => {
            resolve(command.trim().toLowerCase());
        });
    });
}

function askForDescription() {
    return new Promise((resolve) => {
        userInterface.question("Ingrese la descripción de la tarea: ", (description) => {
            resolve(description);
        });
    });
}

function askForIndex() {
    return new Promise((resolve) => {
        userInterface.question("Ingrese el índice de la tarea: ", (index) => {
            resolve(parseInt(index));
        });
    });
}

main();

 */