import express from "express";
import movieRoutes from "./routes/movies_route.js"
import connectDB from "./contollers/db.js";

const app = express()
const PORT = 6969;

app.get('/', (req,res)=>{
   res.json({ msg:"hello from student!!"});

});

//data understanding middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//connect db
connectDB();

// client -> middleware -> server

//?MiddleWares 
app.use('/movies',movieRoutes);

app.listen(PORT,()=>{
    console.log(`this server running at http://localhost:${PORT}`);
});