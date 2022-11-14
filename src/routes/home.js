const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home/index', { titulo: "Inicio" });
});

router.get('/contacto', (req, res) => {
    res.render('home/contacto', { titulo: "Contacto" });
});

module.exports = router;