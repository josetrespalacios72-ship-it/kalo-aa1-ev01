const express = require('express');

const app = express();
app.use(express.json());

// Registro de usuarios
app.post('/registro', (req, res) => {
    const { nombre, correo, contraseña } = req.body;

    res.json({
        mensaje: 'Usuario registrado correctamente',
        nombre,
        correo
    });
});

// Inicio de sesión
app.post('/login', (req, res) => {
    const { correo, contraseña } = req.body;

    res.json({
        mensaje: 'Inicio de sesión exitoso',
        correo
    });
});

// Registro de alimentos
app.post('/alimentos', (req, res) => {
    const { alimento, calorias } = req.body;

    res.json({
        mensaje: 'Alimento registrado correctamente',
        alimento,
        calorias
    });
});

// Meta diaria de calorías
app.post('/meta', (req, res) => {
    const { meta } = req.body;

    res.json({
        mensaje: 'Meta diaria registrada correctamente',
        meta
    });
});

// Resumen nutricional
app.get('/resumen', (req, res) => {
    res.json({
        meta: 2000,
        consumidas: 540,
        restantes: 1460
    });
});

// Puerto del servidor
app.listen(3000, () => {
    console.log('Servidor ejecutándose en puerto 3000');
});