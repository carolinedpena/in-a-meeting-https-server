const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');

const app = express();
const hostname = "localhost";
const port = 5000;

const subscriptionRoutes = require('./routes/subscription-routes');
const subscriptionController = require('./controllers/subscription-controller');

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true")
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, X-Auth-Token, X-Requested-With, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "GET, POST")
    next();
})

app.use('/api', subscriptionRoutes);

app.use((error, req, res, next) => {
    if (res.headerSent) {
        return next(error)
    }

    res.status(error.code || 500);
    res.json({ message: error.message || 'An unknown error has occured.' })
})

http.createServer(app).listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`)
})