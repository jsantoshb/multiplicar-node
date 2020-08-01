const fs = require('fs');
const colors = require('colors');

let listar = (base, limite)=>{
    if(!Number(base)) {
        console.log(`${base} No es un número`)
        return;
    }
 
    for(let i=1; i<=limite; i++){
      console.log(`${base} * ${i} = ${base * i} \n`.green);
    }
}

 let crearArchivo = (base, limite)=>{
    return new Promise((resolve, reject)=>{

        if(!Number(base)) {
            reject(`${base} No es un número`)
            return;
        }
        let data = '';
        for(let i=1; i<=limite; i++){
          data += `${base} * ${i} = ${base * i} \n`
        }
        fs.writeFile(`tablas/tabla-${base}.txt`, data, 'utf8', (err)=>{
            if(err) reject(err);
            resolve(`tabla-${base}.txt`)
         
        }) 
    })
}

module.exports = {
    crearArchivo,
    listar
}