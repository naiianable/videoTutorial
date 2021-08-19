var express = require('express');
var exphbs  = require('express-handlebars');
var path = require('path');

var app = express();

app.engine('hbs', exphbs({ 
    extname: "hbs",
    defaultLayout: "",
    //layout of the page is in a folder in /views
    layoutsDir: path.join(__dirname + "./views"),
    partialsDir: path.join(__dirname + "/views") 
    })
);
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
    res.render('guest-home');
});

app.listen(3660);