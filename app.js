const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar');
const argv = require ('./config/yargs').argv;

let comando = argv._[0];

switch(comando){
    case 'listar':
        console.log("Listar");
        listarTabla(argv.base, argv.limite);
    break;
    case 'crear': 
        console.log("Crear");
        crearArchivo(argv.base, argv.limite).then(
            archivo=> console.log(`Archivo creado: ${archivo}`)
        ).catch(e=>console.log("error",e))
    break;
    default:
        console.log("comando no reconocido");
}
