// cria servidor
import express from 'express'

const app = express()

app.use(express.json()) // habilita leitura do body em JSON

const users = [] // banco de dados

// cria usuário
app.post('/usuarios', (req, resp) => {
    users.push(req.body)
    
    resp.status(201).json(users)
})

// lista usuário
app.get('/usuarios', (req, resp) => {
    resp.status(200).json(users)
    
})

// Porta do servidor
app.listen(4000)