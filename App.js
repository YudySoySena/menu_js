const { menu, pause } = require('./models/menu');
const { crearTarea, listarTareas, eliminarTarea } = require('./models/tareas');


const principal = async () => {
    let opt = '';

    // Bucle para mostrar el menú
    do {
        
        opt = await menu();

        // Ejecutará laopción seleccionada 
        switch (opt) {
            case '1':
                await crearTarea();
                break;
            case '2':
                await listarTareas();
                break;
            case '3':
                await eliminarTarea();
                break;
            case '4':
                console.log('Saliendo...'.yellow);
                break;
        }

        if (opt !== '4') await pause();
    } while (opt !== '4');
};

principal();