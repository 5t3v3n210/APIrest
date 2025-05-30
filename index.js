const express = require('express');
const app = express();                  // constante para llamar express
const mongoose = require('mongoose');   // importar mongoose
const cors = require('cors');           // importar cors
const morgan = require('morgan');       // importar morgan
app.use(cors());                        // habilitar cors
app.use(morgan('dev'));                 // habilitar morgan para registrar solicitudesHTTP
const bodyParser = require('body-parser'); // covierte solicitudes en json
app.use(bodyParser.json());                 // convierte el cuerpo de la solicitud en json

const postRouter = require('./routes/usuario'); // importar rutas de servicio
app.use('/usuario', postRouter);


// conectamos a la base de datos
mongoose.connect('mongodb+srv://stevenbarrios873:am12oKD4ohZ1uJtK@registropersona.7fnrxtj.mongodb.net/?retryWrites=true&w=majority&appName=registroPersona', {
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