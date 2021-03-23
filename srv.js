// servidor sin express
const http = require('http'); 
const url = require('url'); 
const fs = require('fs'); 

let srv = http.createServer((req,resp)=>{
        //peticionoes
        let urlbase = 'http://' + req.headers.host+'/';
        let myurl = new URL(req.url, urlbase);
    //respuestas
        let ruta='./public'+myurl.pathname;//recibimos la petición del sitio web
        if(ruta==='./public/'){
            ruta='./public/index.html';
        }
        else if (ruta=='./public/form'){//formulario en GET
            console.log('llamada desde orm')
        }
        fs.stat(ruta,(err)=>{
            if(err){
                ruta='./public/error.html';
                fs.readFile(ruta,function(err,data){
                    resp.write(data);
                    resp.end();
                });
            }
            else{
                fs.readFile(ruta,function(err,data){
                    resp.write(data);
                    resp.end();
                });
            }
        });
    }).listen(5000,function(err){
    console.log('servidor iniciado')
});