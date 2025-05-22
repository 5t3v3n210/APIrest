const mongoose = require('mongoose'); // importar mongoose aqui

const postSchema = new mongoose.Schema;({        // importar esquema de mongoose

title:{         // definir el esquema para los datos //modelo
    type:String,
    required:true
},
description:{ 
    type:String,
    required:true
},
date:{
    type:Date,
    default:Date.now
}
});
module.exports = mongoose.model('Post', postSchema); // exportar el modelo que acabamos de crear 