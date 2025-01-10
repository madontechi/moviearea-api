import Movie from "../models/movie_model.js";

export const MovieIndex = (req,res)=>{
    res.send("get all moviees lists")
    
};

export const MovieCreate = async (req,res)=>{

//validate your data
const newMovie = new Movie({
    title: req.body.title,
    desc: req.body.desc,
});

   try {
    const movie = await  newMovie.save();

    return res.status(201).json(movie);
    
   } catch (error) {
    return res.status(400).json({ message: error.message });
    
   }
};

export const MovieUpdate = (req,res)=>{
    res.send("update movie")

};

export const MovieDelete =(req,res)=>{
    res.send("delete movie")
};