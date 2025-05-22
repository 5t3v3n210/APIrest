const express = require('express');
const app = express();                  // constante para llamar express
const mongoose = require('mongoose');   // importar mongoose
const cors = require('cors');           // importar cors
const morgan = require('morgan');       // importar morgan
const bodyParser = require('body-parser'); // covierte solicitudes en json
app.use(bodyParser.json());                 // convierte el cuerpo de la solicitud en json

const postRouter = require('./routes/post'); // importar rutas de servicio
app.use('/servicios', postRouter);


// conectamos a la base de datos
mongoose.connect('mongodb+srv://maicolbarrios873:-kgb83iR7svtbPz@cluster0.htxr7yp.mongodb.net/post?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true    
});

// constante para la conexión a la base de datos
const conection = mongoose.connection;
// mensaje de confirmación de conexión 
conection.once('open', () => {
    console.log('Base de datos conectada');
});


app.listen(10000); // puerto por el que escucha el servidor