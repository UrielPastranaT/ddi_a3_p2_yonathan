const express = require('express');
const app = express();
const route = express.Router(); // Para manejar las rutas
const path = require("path"); //modulo externo

var options = {root:path.join(__dirname, "../vistas")}; // Utilizada por el metodo sendFile


route.get("/index", (req, res)=>
{
    //res.send ("peticion solucionada")
    res.sendFile('index.html', options);
});

route.get("/escribir_en_git", (req, res)=>
{
    //res.send ("peticion solucionada")
    res.sendFile('escribir_en_git.html', options);
});

route.get("/sintaxis", (req, res)=>
{
    //res.send ("peticion solucionada")
    res.sendFile('sintaxis.html', options);
});

route.get("/acerca_de_git", (req, res)=>
{
    //res.send ("peticion solucionada")
    res.sendFile('acerca_de_github.html', options);
});

route.get("/crear_cuenta_github", (req, res)=>
{
    //res.send ("peticion solucionada")
    res.sendFile('crear_cuenta_github.html', options);
});

route.get("/escribir_en_git", (req, res)=>
{
    //res.send ("peticion solucionada")
    res.sendFile('escribir_en_git.html', options);
});

module.exports = route;