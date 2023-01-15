const express = require('express');
const app = express();
const mongodb = require('./db/connect');
const port = process.env.PORT || 3000;

app.use('/', require('./routes'));

// app.listen(port, () => {
//     console.log(`Running on port ${port}`)
// })

mongodb.initDb((err) => {
    if (err) {
      console.log(err);
    } else {
      app.listen(port);
      console.log(`Server is running on port ${port}`);
    }
  });