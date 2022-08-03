
const express = require("express")
const app = express()
app.set('views', './')

app.listen(3050, ()=>{
    console.log("servidor local em http://localhost:3050")
})

const mongoose = require('mongoose')

const conexao = ()=>{
    mongoose.connect('mongodb+srv://userRevisao:cookie123456@fiaptecnico.b869f.mongodb.net/revisao')
}

const modelo = new mongoose.Schema({
    nome:String,
    turma:String,
    disciplina: String,
})

const alunos = mongoose.model("alunos",modelo)

app.get('/',async(req,res)=>{
    conexao()
    const resultado = await alunos.find()
    console.log(resultado)

   res.render('index.ejs', {resultado})
})