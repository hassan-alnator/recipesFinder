const express = require('express');
const path = require('path');
var request = require('request');
const bodyParser = require('body-parser');

const app = express();

const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');

app.use(bodyParser.urlencoded({ extended: true }));


app.post("/recipes", function (req, res) {

    const url = req.body.url;
    console.log(url);
    request(url, function (error, response, body) {
        res.end(body)
    });
})

app.use(webpackMiddleware(webpack(webpackConfig)));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
