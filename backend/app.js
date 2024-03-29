const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const configRouter = require('./routes/config');
const thresholdRouter = require('./routes/threshold');

const app = express();

/******************************************************************************
 * VIEW ENGINE SETUP
 *****************************************************************************/

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

/******************************************************************************
 * MIDDLEWARE
 *****************************************************************************/

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'vendor/node_modules')));

/******************************************************************************
 * ROUTES
 *****************************************************************************/

app.use('/', indexRouter);
app.use('/api/v1/config/', configRouter);
app.use('/api/v1/thresholds/', thresholdRouter);

/******************************************************************************
 * ERROR HANDLING
 *****************************************************************************/

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
