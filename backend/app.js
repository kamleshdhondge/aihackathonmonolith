

import express from "express";
import bodyParser from 'body-parser';

import cors from 'cors';


const app = express();

import configRoutes from "./routes/index.js";
// global.__basedir = __dirname;

var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

configRoutes(app);

app.listen(3003, () => {
  console.log("We've now got a server!");
  console.log("Your routes will be running on http://localhost:3003");
});
