const router = require('express').Router();
const aluno = require("../models/aluno")

router.get("/todos", async(req, res) =>{
    try {
       const alunos = await Aluno.find();
       return res.status(200).json(alunos);
    } catch (error) {
        return res.status(400).json({error: "Não foi possivel"})
    }
})

router.post("/cadastro", async(req, res) =>{
    try{
       const nome = req.body.nome;
       const idade = req.body.idade;
       const profissao = req.body.profissao;

       if(nome == null || idade == null || profissao == null ){
        return res.status(400).json({error: "preencha tudo"})
       }

       const Aluno = new Aluno({
        nome: nome,
        idade: idade,
        profissao: profissao
       })

       const newAluno = await aluno.save();

       return res.status(200).json(newAluno);

    } catch (error) {
        return res.status(400).json({error: "Não foi possivel"})
    }
})

router.put("/alterar/:id", async (req, res) => {
    try {
    const id = req.params.id; 
    const pessoa = await aluno.findOne({ _id: id });
    const updateData = {nome: req.body.nome,idade: req.body.idade,profissao: req.body.profissao,};
    const pessoaAtualizada = await aluno.updateOne({ _id: id },{ $set: updateData },{ new: true }); res.json({ pessoaAtualizada });
} 
    catch (error) {
        return res.status(400).json({ error: "Usuário não existe"})
    }
})

router.delete("/deletar/:id", async (req, res) => {
    try {
        const id = req.params.id; 
        await aluno.deleteOne({ _id: id });
        return res.status(200).json({ info: "Usuário deletado com sucesso!" });
    } 
      catch (error) {return res.status(400).json({ error: "Usuário não existe" });}});

module.exports = router;