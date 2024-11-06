const inquirer = require('inquirer');
const colors = require('colors');
const { pause } = require('./menu');

const tareas = [];

const crearTarea = async () => {
    const { descripcion } = await inquirer.default.prompt([
        {
            type: 'input',
            name: 'descripcion',
            message: 'Descripción de la tarea:',
            validate(value) {
                if (value.length === 0) {
                    return 'Por favor ingrese una descripción.';
                }
                return true;
            }
        }
    ]);
    tareas.push(descripcion);
    console.log('Tarea creada correctamente'.green);
};

const listarTareas = async () => {
    console.clear();
    console.log('Listado de tareas:'.blue);
    if (tareas.length === 0) {
        console.log('No hay tareas registradas'.yellow);
    } else {
        tareas.forEach((tarea, index) => {
            console.log(`${(index + 1).toString().green}. ${tarea}`);
        });
    }
    await pause();
};

const eliminarTarea = async () => {
    if (tareas.length === 0) {
        console.log('No hay tareas para eliminar'.red);
        return;
    }

    const { index } = await inquirer.default.prompt([
        {
            type: 'list',
            name: 'index',
            message: 'Seleccione la tarea a eliminar:',
            choices: tareas.map((tarea, i) => ({
                value: i,
                name: `${(i + 1).toString().green}. ${tarea}`
            }))
        }
    ]);

    const tareaEliminada = tareas.splice(index, 1);
    console.log(`Tarea eliminada: ${tareaEliminada}`.red);
    await pause();
};

module.exports = {
    crearTarea,
    listarTareas,
    eliminarTarea
};