// cria servidor
import 'dotenv/config'
import express from 'express'
import pkg from '@prisma/client'
const { PrismaClient } = pkg

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

// Edita usuário
app.put('/usuarios/:id', async(req, resp) => {

    await prisma.user.update({
        where: {
            id:req.params.id
        },
        data: {
            email: req.body.email,
            name:req.body.name,
            age: req.body.age
        }
    })

    resp.status(201).json(req.body)
})

// Deleta usuário
app.delete('/usuarios/:id', async(req, resp) => {

    await prisma.user.delete({
        where: {
            id:req.params.id
        }
    })

    resp.status(200).json({message: 'Usuario deletado com sucesso'})
})

// lista usuário
app.get('/usuarios', async(req, resp) => {

    const users = await prisma.user.findMany()

    resp.status(200).json(users)
    
})

// Porta do servidor
app.listen(4000)