const express = require('express');
const app = express()

app.get('/', (req,res)=>{
    res.send('hello server')
});
app.get('/', (req,res)=>{
    res.send('hello server from shahab')
});

app.get('/', (req,res)=>{
    res.send('hello server from babar')
});


app.listen(3000, ()=>{
    console.log(' server run successfully');
    
})