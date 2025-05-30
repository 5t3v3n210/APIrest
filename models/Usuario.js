const mongoose = require('mongoose'); // importar mongoose aqui

const usuarioSchema = new mongoose.Schema({        // importar esquema de mongoose

// definir el esquema para los datos //modelo

nombre: {
    type: String,
    required: true
    },
apellidos: {
    type: String,
    required: true
    },
identificacion: {
    type: String,
    required: true
    },
numeroTelefonico: {
    type: String,
    required: true
    },
correoElectronico: {
    type: String,
    required: true
    },
fechaRegistro: {
    type: Date,
    default: Date.now
    }
});
module.exports = mongoose.model('Usuario', usuarioSchema); // exportar el modelo que acabamos de crear 