import express from 'express';
import { getAllNotes, getNoteById, createNote, editNote, deleteNote } from './database.js'
import dotenv from 'dotenv';
import cors from 'cors';

const corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200,
}


dotenv.config();
const PORT = process.env.PORT ?? 3001

const app = express();
app.use(express.json());
app.use(cors(corsOptions));

//All notes
app.get('/notes', async (req, res) => {
    const notes = await getAllNotes();
    
    res.status(200).send(notes);
})

//GET note by ID
app.get('/notes/:id', async (req, res) => {
    const note = await getNoteById(req.params.id);
    
    res.status(200).send(note);
})

//CREATE note
app.post("/notes", async (req, res) => {
    const { title, description } = req.body;
    const note = await createNote(title, description)
    
    res.status(201).send({ message: "Note created successfully", data: note});
})

//EDIT note
app.put("/notes/:id", async (req, res) => {
    const id = req.params.id;
    const { title, description } = req.body; 
    const edit = await editNote( id, title, description)

    res.status(200).send({ message: "Note edited successfully", data: edit});
})

//DELETE note
app.delete("/notes/:id", async (req, res) => {
    await deleteNote(req.params.id); 

    res.status(200).send({ message: "Note deleted successfully"})
})


app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`)
})