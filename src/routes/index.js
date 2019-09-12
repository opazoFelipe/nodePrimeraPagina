const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    // res.sendFile(path.join(__dirname, 'views/index.ejs'))
    res.render('index.html', {title: 'First Web Page With Node', nombre: 'felipe'});
});

router.get('/contact', (req, res)=>{
    // res.sendFile(path.join(__dirname, 'views/contact.ejs'))
    res.render('contact.html', {title: 'Esta es la vista contact', nombre: 'felipe'});
});

module.exports = router;