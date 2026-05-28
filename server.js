// cria servidor
import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()

app.use(express.json()) // habilita leitura do body em JSON


// cria usuário
app.post('/usuarios', async (req, resp) => {
    
    await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })
    
    resp.status(201).json(req.body)
})

// lista usuário
app.get('/usuarios', async(req, resp) => {

    const users = await prisma.user.findMany()

    resp.status(200).json(users)
    
})

// Porta do servidor
app.listen(4000)