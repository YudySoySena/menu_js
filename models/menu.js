var colors = require('colors');
const inquirer = require('inquirer');


const questions = {
    type: 'list',
    name: 'options',
    message: 'Escoge la opción de tu preferencia',
    choices: [
        {
            value: '1',
            name: '1. Crear tarea'
        },
        {
            value: '2',
            name: '2. Listar tareas'
        },
        {
            value: '3',
            name: '3. Eliminar tarea'
        },
        {
            value: '4',
            name: '4. Salir'
        }
    ]
};

const menu = async () => {
    console.clear();
    console.log(`${'||||||||||||||||||||||||||||||||||||||||||||||'}`);
    console.log(`${'|             Bienvenido al Menú             |'}`);
    console.log(`${'||||||||||||||||||||||||||||||||||||||||||||||'}`);

    const {options} = await inquirer.default.prompt(questions);
    return options;
};

const pause = async () => {
    const questions = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione la tecla ${'ENTER'.green} para continuar`
        }
    ];
    await inquirer.default.prompt(questions);
};

module.exports = {
    menu,
    pause
};