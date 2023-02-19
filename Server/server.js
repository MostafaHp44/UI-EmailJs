const express =require('express')
const app =express()
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const cors=require('cors')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
const usermodel =require('../Server/Model/Model')


dotenv.config({
    path:"./config.env"
})



app.post('/postuser', (req,res)=>{
    try
    {
       let User=new usermodel({
        email:req.body.email,
        password:req.body.password,
    })
     User.save()
    res.sendStatus(200,'ok')
    }
     catch (err){
        console.log(err);
     }
    })
    
    


mongoose.connect(process.env.MYURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).then(()=>{console.log('DataBase is connect.....!')}).catch((err)=>{console.log(err)})


app.listen(4000,()=>{
    console.log('Server is running now .............');
})
