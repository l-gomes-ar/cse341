let express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
  mongoose = require('mongoose');
  Task = require('./api/models/todoListModel')
  bodyParser = require('body-parser')
  require('dotenv').config()


// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.e3frzzn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let routes = require('./api/routes/todoListRoutes');
routes(app);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'});
});

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);