import express from "express";
import movieRoutes from "./routes/movies_route.js"

const app = express()
const PORT = 6969;

app.get('/', (req,res)=>{
   res.json({ msg:"hello from student!!"});
});


// CRUD functionality of movie


// client -> middleware -> server
//?MiddleWares 

app.use('/movies',movieRoutes);

app.listen(PORT,()=>{
    console.log(`this server running at http://localhost:${PORT}`);
});