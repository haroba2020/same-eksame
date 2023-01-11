const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const { find } = require('lodash');
const Owner = require("./modules/Owners");
const Flock = require("./modules/Flocks");
const app = express();
const routes = require('./routes/route.js')

//middleware
app.use(express.static('public'))
app.use(express.json())
app.use(cookieParser())
mongoose.set("strictQuery", false);


app.set('view engine', 'ejs')

//connect til databasen og koble seg til
const dbURI = 'mongodb+srv://haroba:magnin@cluster0.bvxfvdp.mongodb.net/Same-rein?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then((result) => app.listen(3000))
.catch((err)=> console.log(err)) 

app.get("/",  (req,res)=>{
    // const eiere = await Eier.find()
    
    res.render('index')
})

app.use(routes);
