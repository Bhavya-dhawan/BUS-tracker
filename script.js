import express from 'express';
import path from 'path'
import { fileURLToPath } from 'url'



const app = express()
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename); 
const port = 3001;

app.use(express.static('static'))
app.use(express.urlencoded({extended:true}))

app.get('/' , (req,res) => {
    res.sendFile(path.join(__dirname , 'views' , 'view.html'))
})

app.get('/SearchResult.html' , (req,res) => {
    res.sendFile(path.join(__dirname, 'SearchResult.html'))
})

app.get('/location.html' , (req,res) => {
    res.sendFile(path.join(__dirname, 'location.html'))
})

app.get('/driver_view.html' , (req,res) => {
    res.sendFile(path.join(__dirname, 'driver_view.html'))
})

app.get('/login.html' , (req,res) => {
    res.sendFile(path.join(__dirname, 'login.html'))
})








app.listen(port , () =>
{
    console.log('server listening at port 3001')
})



//some functionality





