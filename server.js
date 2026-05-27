import express from 'express'

const app = express()

app.use(express.json()) // habilita leitura do body em JSON

const users = []

app.post('/usuarios', (req, resp) => {
    console.log(req.body) // agora o body aparece corretamente
    resp.send('Ok post')
})

app.get('/usuarios', (req, resp) => {
    resp.send('Ok, deu bom')
})

app.listen(4000, () => {
    console.log('Servidor rodando na porta 4000')
})