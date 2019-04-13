const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const morgan = require('morgan');

app.use(morgan('dev'));
app.use('/:id', express.static(path.join(__dirname, '/../client')));

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});