
const express = require('express')
const formidable = require('express-formidable')
const db = require('./dbConn')
const adminModel = require('./models/adminModel')
const jwt = require("jsonwebtoken");
const { verifyToken, SECRET_KEY } = require('./middlewares/auth')
const app = express()
// console.log(app);
const cors = require('cors')

const HOST = 'localhost' // 127.0.0.1 default ip
const PORT = 8000
app.use(cors())

app.set('view engine','ejs')
app.use(express.static('public'))

app.use(formidable())

const adminRoutes = require('./routes/adminRoutes')
app.use('/admin',adminRoutes)

const userRoutes = require('./routes/userRoutes')
app.use('/user',userRoutes)

//for login
app.get('/login',(req,res)=>{
    res.render('login',{ msg: null })
})

//for login
app.post('/login', async (req,res)=>{
    const user = await adminModel.findOne({emailId: req.fields.mailId})
    if(user){
        if(user && (user.password === req.fields.pwd )){
            const token = jwt.sign(
                { id: user._id, email: user.emailId },
                SECRET_KEY,
                { expiresIn:"1h" }
            );

            res.json({ success: true, message: "", user, token })
        }
    } else {
        res.json({ success: false, message: "Invalid User ID"})
    }
})



app.get('/',(req,res)=>{
  //  res.send("<h1>Application Default Page</h1>")
  let name = "Sachin"
  let msg = "<font size='4' face='chiller'>Hello</font>"
  let isValid = true
  res.render('default',{ name,msg,isValid })
})

app.get('/home',(req,res)=>{
    //res.send("<h1 align='center'>Application Home Page</h1>")
    let fruitNames = ["Apple","Mango","Banana","PineApple"]
    let userData = {uid:1001,unm:'Virat',gender:'Male'}
    res.render('home',{ fruitNames,userData })
})

app.get('/about',(req,res)=>{
    res.send("<h1 align='center'>About Page</h1>")
})

app.post('/',(req,res)=>{
    res.send("Post Request Handler...")
})

app.listen(PORT,HOST,(err)=>{
    if(err)
        console.log(err);
    else
        console.log(`Server running at http://${HOST}:${PORT}}`);   
})