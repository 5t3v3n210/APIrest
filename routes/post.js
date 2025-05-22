// metodos de expres para el CRUD
const express = require('express'); // importar express
const router = express.Router(); // crear una constante de router para conectar a index.js
const Post = require('../models/Post'); // importar el modelo de post

// GET all posts para que no se detenga el servidor
router.get('/', async (req, res) => { // crear una ruta para obtener todos los posts de la base de datos
    try {
        const posts = await Post.find(); // busca todos los  posts en la base de datos
        res.json(posts); // devuelve los posts en formato json
    } catch (err) {
        res.status(500).json({ message: err.message }); // devolver un error si no se encuentra el post
    }
});

router.get('/:postId',async (req, res) => { // crear una ruta para obtener un post por el postid
    try {  
        const post = await Post.findById(req.params.postid); // busca el post por el id
        res.json(post); // devuelve el post en formato json
    } catch (err) {
        res.json({ message: err.message }); // devolver un error si no se encuentra el post
    }
});
//metodo post
router.post('/', async (req, res) => { // crear una ruta para crear un nuevo post
    const post = new Post({ // crear un nuevo post y asignar los valores
        title: req.body.title, // asignar el titulo del post
        description: req.body.description // asignar la descripcion del post
    });
    try {
        const savedPost = await post.save(); // guardar el post en la base de datos
        res.json(savedPost); // devolver el post guardado en formato json
    } catch (err) {
        res.json({ message: err.message }); // devolver un error si no se encuentra el post
    }
});
//metodo patch o actualizar

router.patch('/:postId', async (req, res) => { // crear una ruta para actualizar un post
    try {
        const updatedPost = await Post.updateOne({ _id: req.params.postId }, { $set: { title: req.body.title, description: req.body.description } }); // actualizar el post por el id
        res.json(updatedPost); // devolver el post actualizado en formato json
    } catch (err) {
        res.json({ message: err.message }); // devolver un error si no se encuentra el post
    }
});

//metodo delete
router.delete('/:postId', async (req, res) => { // crear una ruta para eliminar un post
    try {
        const removedPost = await Post.findByIdAndDelete(req.params.postId); // eliminar el post por el id
        if (!removedPost) { // si no se encuentra el post
            return res.status(404).json({ message: 'Post no encontrado' }); // devolver un error 404
        }
    } catch (err) {
        console.log(err); // imprimir el error en la consola
        res.status(500).json({message: "error de conexion"}); // devolver un error si no se encuentra el post
    }
});

module.exports = router; // exportar el router para usarlo en index.js




