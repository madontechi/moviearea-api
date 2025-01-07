import express from "express"

const router = express.Router()
//? for readings
router.get('/',(req,res)=>{
    res.send("get all moviees lists")
    
})

//? for creating movies
router.post('/',(req,res)=>{
    res.send("create movie lists")
})

//? for updating movies
router.put('/:id',(req,res)=>{
    res.send("update movie")

})

//? for delete movie

router.delete('/:id',(req,res)=>{
    res.send("delete movie")
})


export default router;
