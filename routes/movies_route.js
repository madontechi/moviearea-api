import express from "express"
import { MovieCreate, MovieDelete, MovieIndex, MovieUpdate } from "../contollers/movie_controller.js"

const router = express.Router()
//? for readings
router.get('/',MovieIndex)

//? for creating movies
router.post('/',MovieCreate)

//? for updating movies
router.put('/:id', MovieUpdate)

//? for delete movie

router.delete('/:id', MovieDelete)


export default router;
