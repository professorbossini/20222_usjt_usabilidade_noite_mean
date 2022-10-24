require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const clienteRoutes = require ('./rotas/clientes');
const cors = require("cors");
const app = express();
app.use(express.json());
//vamos substituir a configuração CORS manual, usando o pacote cors
app.use(cors());
const { MONGODB_USER, MONGODB_PASSWORD, MONGODB_CLUSTER, MONGODB_HOST } =
  process.env;

 const urlMongoDB =
 "mongodb+srv://jcarmino:jcarmino@cluster0.rcjhbzp.mongodb.net/?retryWrites=true&w=majority";
//const urlMongoDB = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_CLUSTER}.${MONGODB_HOST}.mongodb.net/?retryWrites=true&w=majority`
const Cliente = require("./models/cliente");

mongoose
  .connect(urlMongoDB)
  .then((response) => {
    console.log("Conexão OK");
    // console.log(response)
  })
  .catch((err) => {
    console.log("Conexão NOK");
    console.log(err);
  });
const clientes = [
  {
    id: "1",
    nome: "Jose",
    fone: "11223344",
    email: "jose@email.com",
  },
  {
    id: "2",
    nome: "Jaqueline",
    fone: "22112211",
    email: "jaqueline@email.com",
  },
  {
    id: "3",
    nome: "João",
    fone: "22112211",
    email: "jaqueline@email.com",
  },
];

//app.use (clienteRoutes);
app.use ('/api/clientes', clienteRoutes);

module.exports = app;
