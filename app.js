const fs = require('fs');
const {crearArchivo, listar} = require('./multiplicar/multiplicar');
const {argv} = require('./config/yargs');
const colors = require('colors');

let comando = argv._[0];

switch(comando){
    case 'listar':
        listar(argv.base, argv.limite)
        break;
        
    case 'crear':
        crearArchivo(argv.base, argv.limite)
        .then(archivo => console.log(`Archivo creado: ${archivo.green}`))
        .catch(err=> console.log(err))
        break;
    
     default:
        console.log('Comando no reconocido')
        break;
}
  