const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 4000
const categories = require('./data/categories.json')

app.use(cors())

app.get('/', (req,res) => {
    res.send('news 24 server is running.')
})

app.get('/news-categories', (req, res) =>{
    res.send(categories)
})

app.listen(port, ()=> {
    console.log(`news server is running on port ${port}`)
})