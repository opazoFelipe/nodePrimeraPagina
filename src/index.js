const express = require('express');
const path = require('path');

const app = express();

//Settings
app.set('name', 'PaginaWebNode');
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//Middlewares

//Static Files
app.use(express.static(path.join(__dirname, 'public')));

//Routes
app.use(require('./routes'));

app.listen(app.get('port'), ()=>{
    console.log('Server on port '+app.get('port'));
});