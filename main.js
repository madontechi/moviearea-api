import express from "express";

const app = express()
const PORT = 6969;

app.get('/', (req,res)=>{
   res.json({ msg:"hello from student"});
});

app.listen(PORT,()=>{
    console.log(`this server running at http://localhost:${PORT}`);
});