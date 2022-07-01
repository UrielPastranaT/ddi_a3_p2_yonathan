const express = require('express');
const app = express();

app.use(require("./rutas/solicitudes.js"))
app.use(express.static(__dirname + '/vistas'));

//Configuraciones (settings)
app.set("puerto", 3000);

//Servidor escuchando
app.listen(app.get("puerto"), ()=>
{
    console.log("Servidor ecuchando en el puerto: ", app.get("puerto"));
});



