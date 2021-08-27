//Imports
var express = require('express');
var logger = require('morgan');
var userRouter = require('./Routes/users.routes');
var expenseRouter = require('./Routes/expenses.routes');
var settlementRouter = require('./Routes/settlements.routes');

//Initializing express 
var app = express();
app.use(logger('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json())


//express routes
app.use('/users', userRouter);
app.use('/expenses', expenseRouter);
app.use('/settlements', settlementRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(err.status || 404).json({
    message: "No such route exists"
  })
});

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500).json({
    message: "Error Message"
  })
});

var server = app.listen(8080, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("app listening at http://%s:%s", host, port)
})