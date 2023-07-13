const exp=require('express')
const app=exp()
var cors = require('cors')
// var app = express()
 app.use(exp.json())
app.use(cors())
app.get('/get',(req,res)=>{
    res.send({message:'hello'})
})

app.post('/post',(req,res)=>{
    console.log(req.body)
    res.send({message:req.body,data:'recieved'})
})

app.listen(3014,()=>{console.log("Server in 3014")})