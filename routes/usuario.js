const express = require('express');
const router = express.Router();
const Usuario = require('../models/Usuario'); // importar el modelo Usuario

// GET: obtener todos los usuarios
router.get('/', async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.json(usuarios);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET: obtener un usuario por ID
router.get('/:usuarioId', async (req, res) => {
    try {
        const usuario = await Usuario.findById(req.params.usuarioId);
        res.json(usuario);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST: crear nuevo usuario
router.post('/', async (req, res) => {
    const usuario = new Usuario({
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        identificacion: req.body.identificacion,
        numeroTelefonico: req.body.numeroTelefonico,
        correoElectronico: req.body.correoElectronico
    });
    try {
        const nuevoUsuario = await usuario.save();
        res.json(nuevoUsuario);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// PATCH: actualizar usuario por ID
router.patch('/:usuarioId', async (req, res) => {
    try {
        const updatedUsuario = await Usuario.updateOne(
            { _id: req.params.usuarioId },
            {
                $set: {
                    nombre: req.body.nombre,
                    apellidos: req.body.apellidos,
                    identificacion: req.body.identificacion,
                    numeroTelefonico: req.body.numeroTelefonico,
                    correoElectronico: req.body.correoElectronico
                }
            }
        );
        res.json(updatedUsuario);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// DELETE: eliminar usuario por ID
router.delete('/:usuarioId', async (req, res) => {
    try {
        const removedUsuario = await Usuario.findByIdAndDelete(req.params.usuarioId);
        if (!removedUsuario) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json({ message: 'Usuario eliminado correctamente' });
    } catch (err) {
        res.status(500).json({ message: "Error de conexión" });
    }
});

module.exports = router;


