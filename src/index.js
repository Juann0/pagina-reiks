const express = require("express");
const exphbs = require('express-handlebars');
const path = require('path');
const flash = require('connect-flash');

const app = express();

/* Configuración */
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');
/* Configuración */

/* Archivos estáticos */
app.use(express.static(path.join(__dirname, 'public')));
/* Archivos estáticos */

/* Rutas */
app.use(require('./routes/home'));
/* Rutas */


app.listen(app.get('port'), () => {
    console.log(`El sevidor se ejecuta en el puerto http://127.0.0.1:${app.get('port')}`);
});