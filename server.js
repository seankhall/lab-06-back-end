'use strict';

require('dotenv').config()
const express = require('express');
const cors = require('cors')

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/mitchell', (req,res)=>{
    res.send('JERICA MITCHELL IS IN DA HOUSE!!')
});


app.listen(PORT, () =>{
    console.log(`listening on port: ${PORT}.`)
});