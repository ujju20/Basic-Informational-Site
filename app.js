const express =require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res,next) => {
    res.sendFile(path.join(__dirname,'/views/home.html'));
})

app.get('/about',(req,res,next) => {
    res.sendFile(path.join(__dirname,'/views/about.html'));
})

app.get('/contact',(req,res,next) => {
    res.sendFile(path.join(__dirname,'/views/contac-me.html'))
})

app.use('*',(req,res,next) => {
    res.sendFile(path.join(__dirname,'/views/404.html'));
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
  });