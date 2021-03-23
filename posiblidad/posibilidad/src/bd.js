const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database(':memory:');

db.run(
    if (){db.run('CREATE TABLE usuarios(nombre text, apellido text);',(err)=>{
        if(err){
            return console.log(err.message);
        }
        else{
            console.log('Tabla usuarios Creada')
        }
    })}
    else{}

);


db.close((err)=>{
    if (err){
        return console.log('bd no cerro :'+err.message)
    }
    else{
        console.log('conexion cerrada a DB')
    }
});