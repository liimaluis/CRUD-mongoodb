const mongoose = require("mongoose")

const schemaAluno = mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    idade: {
        type: Number,
        require: true
    },
    profissao: {
        type: String,
        require: true
    }
})

const Aluno = mongoose.model("alunos", schemaAluno);

module.exports = Aluno;