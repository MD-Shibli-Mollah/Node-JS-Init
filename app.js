const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");

const app = express();

const adminRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use((req,res,next) => {
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});

app.listen(3000);
 //const routes = require('./routes');
//const server = http.createServer(routes);
//const server = http.createServer(app);
//server.listen(3000);