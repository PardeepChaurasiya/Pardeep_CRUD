const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');



const app = express()

const route = require('./route/routes')

mongoose.connect('mongodb+srv://knolduspardeep:PardeepMongodb@cluster0.njvhu.mongodb.net/shoppinglist?retryWrites=true&w=majority', (err) => {
    if (!err)
        console.log('MongoDB connection succeeded.');
    else
        console.log('Error in DB connection : ');
});

app.use(cors())

app.use(bodyParser.json())

app.use('/api',route)

app.use((req,res)=>{
    res.status(404).send('<h1>Page not found<h1>')
})


app.listen(4000, () => console.log('Server started at port : 4000'));
