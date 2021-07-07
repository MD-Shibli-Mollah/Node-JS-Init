const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
 
const app = express();

app.use(bodyParser.urlencoded({extended: false})); 

app.use('/add-products',(req, res, next) => {
   // console.log("ONE Middleware is working");
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
   // next(); //Allow the request to continue to the next middleware.
});

app.use('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
}); 

app.use('/',(req, res, next) => {
    console.log("THIS ALWAYS RUNS!!! EVEN WITHOUT NEXT");
    res.send("<h1>Assalamu Alaikum, Khadizatul Kobra, My sweetest Ahlia!!!</h1>");
});

app.listen(3000);
 //const routes = require('./routes');
//const server = http.createServer(routes);
//const server = http.createServer(app);
//server.listen(3000);