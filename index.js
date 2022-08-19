const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const alunoRouter = require("./routes/alunosRoutes");

const dbName = 'pessoal';
const port = 8000;
const app = express();

app.use(cors());
app.use(express.json());
app.use;

app.use("/api/pessoal/aluno", alunoRouter);

mongoose.connect(`mongodb://localhost/${dbName}`);

app.get("/", (req,res) =>{
    res.json({message: "Rota ok"});
});

app.listen(port,() =>{
    console.log("Servidor iniciado");
});