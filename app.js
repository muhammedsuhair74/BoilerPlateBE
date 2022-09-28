const routes = require('./src/routes');
const express = require('express');
const path = require("path");
const dotenv = require('dotenv');
const app = express();

dotenv.config({ path: path.resolve(__dirname, "./.env") }); // setting path of env
const port = process.env.port || 5008;
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Content-Type", "application/json");
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Cache-Control, Pragma, Origin, Authorization, Accept, x-client-key, x-client-token, x-client-secret, Content-Type, Content-Disposition, X-Requested-With"
  );
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, OPTIONS");
  return next();
});

app.use(routes);
const mongoose = require('mongoose');

dotenv.config();
console.log('process.env.DB_CONNECT');
console.log(process.env.DB_CONNECT);
mongoose.connect(
  process.env.DB_CONNECT,
  { 
    useUnifiedTopology: true 
  }, (err) => console.log( err || "connected to db"));

app.listen(port, () => console.log(`listening to port ${port}`));
