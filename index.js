const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 4000
const categories = require('./data/categories.json')
const news = require('./data/news.json')

app.use(cors())

app.get('/', (req,res) => {
    res.send('news 24 server is running.')
})

app.get('/news-categories', (req, res) =>{
    res.send(categories)
})


app.get('/categories/:id',(req, res)=>{
    const id = req.params.id
    if(id === 08){
        res.send(news)
    }
    else{
        const categoryNews = news.filter(n => n.category_id === id)
        res.send(categoryNews)
    }
})


app.get('/news/:id', (req, res)=>{
    // console.log(req.params.id)
    const id = req.params.id
    const selectedNews = news.find(n => n._id === id)
    res.send(selectedNews)
})



app.listen(port, ()=> {
    console.log(`news server is running on port ${port}`)
})