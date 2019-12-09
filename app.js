const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routes/index');
const adminRouter = require('./routes/admin');
const usersRouter = require('./routes/api/users');
const tubsRouter = require('./routes/api/tubs');
const greenhousesRouter = require('./routes/api/greenhouses');
const towersRouter = require('./routes/api/towers');
const sseRouter = require('./routes/api/stream');
const configRouter = require('./routes/api/config');
const app = express();
const thresholdRouter = require('./routes/api/threshold');

/******************************************************************************
 * VIEW ENGINE SETUP
 *****************************************************************************/

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.locals.basedir = path.join(__dirname, 'views');


/******************************************************************************
 * MIDDLEWARE
 *****************************************************************************/

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'vendor/node_modules')));


/******************************************************************************
 * ROUTES
 *****************************************************************************/

app.use('/', indexRouter);
app.use('/admin', adminRouter);
app.use('/api/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/towers', towersRouter);
app.use('/api/tubs', tubsRouter);
app.use('/api/greenhouses', greenhousesRouter);
app.use('/stream', sseRouter);
app.use('/api/config', configRouter);
app.use('/api/threshold', thresholdRouter);

/* SSE Accessible par URL dans un seul endroit du document.
app.get('/stream', (req, res)=>{
  res.status(200).set({
    "connection": "keep-alive",
    "content-type": "text/event-stream"
  });
  res.write(`data: Hello there \n\n`);
}); */

/******************************************************************************
 * ERROR HANDLING
 *****************************************************************************/

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
