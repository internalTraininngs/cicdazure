var app = require('express')();

app.get('/', (req, res, next) => {
  res.status(200).send('hey there i m running....<br> yaay!!!');
});

if (!module.parent) {
  app.listen(3000, _ => {
    console.log('listening to port : 3000');
  });
}

module.exports = app;