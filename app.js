require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

let app = express();
const bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let use get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use('view engine', 'pug');
app.use("views", path.join(__dirname, "views"))

// error handler
app.use((err, req, res, next) => {
  ///set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.message = req.app.get('env') === 'development' ? err : {};

  //render the error page
  res.status(err.status || 500);
  res.render('error');
})

var server = app.listen(process.env.PORT || 8765, () => {
  console.log(`Listening on port ` + server.address().port)
})

module.export = app