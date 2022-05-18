const express=require('express')
const cors=require('cors')
const app=express()

app.use(cors())
app.use(express.json())

app.get('/',async (req,res,next)=>{
    res.send(`<h2>hello world<h2>`)
})


app.use((err,req,res,callback)=>{

})
app.listen(3000,()=>{
    console.log('3000 port is connected')
})

