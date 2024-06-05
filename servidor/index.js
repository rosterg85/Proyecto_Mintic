const express = require('express');
const app= express();
const puerto=3003;
app.get('/',(req,res)=>{
    res.send('Hola Mundo')
}

);