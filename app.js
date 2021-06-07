// app para ercibir peticiones y dar una respuesta básica
const express = require("express");     // "express" es el módulo de la carpeta node_modules que instalé al prinicpio con el npm i express
const app = express();  // en la línea anterior importé el módulo, y en esta línea lo enciendo o activo.
// lo guarda en una variable para poder configurarlo posteriormente.
const path = require("path") // es un modulo que permite dirigir la ruta a un archivo.

app.use(express.static(path.join(__dirname, 'public'))) //path.join crea una ruta, "__dirname" hace referencia a toda la ruta anterior a este archivo, y "public" es la carpeta donde quiero acceder.
// lo que le digo con .static, es que en esta ruta están todos los archivo estáticos.


app.get("/", function (req, res) {      // Para configurar las rutas. Defino cómo termina la ruta donde recibiré las peticiones. Es relativa a la ruta raíz.
    // function sólo se ejecuta cuando haya una petición a la ruta definida.
    console.log("hola")
    // res.send("Hola usuario")    // escribo una respuesta y se la envío al cliente.
    //res.send("Hola usuario otra vez") // esto no le aparece porque sólo puedo enviar una respuesta por request, y sólo muestra la primera res.
    // luego de dar un res, se cierra la comunicación.

    // en res, enviaré el archivo html que yo deseo. Usando el metodo .sendFile()
    let file = path.resolve("src", "index.html")    // puedo crear tantas rutas como necesite.
    // tendré una ruta por cada archivo.
    console.log(file)
    res.sendFile(file) // lee el archivo, extrae el contenido y lo envía como respuesta.

})
app.get("/contacto", function (req, res) {
    let file = path.resolve("src", "contacto.html")    // puedo crear tantas rutas como necesite.
    console.log(file)
    res.sendFile(file)
})


app.listen(3000)        // en qué puerto de la máquina estará escuchando esta aplicación. Defino 3000, pero puede ser otro puerto.

