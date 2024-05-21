import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

// TRY CONECTION
async function connection() {
    try {
        var test = mysql.createPool({
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DB,
            port: process.env.MYSQL_PORT
        }).promise()
        
        return test

    } catch (e) {
        console.error('Error connecting:', e)
    }
}


export async function getAllNotes() {
    try {
        const connect = await connection();
        const rows = await connect.query('SELECT * FROM notes');
        //console.log('Connected successfully');
        //console.log(rows[0])
        return rows[0]

    } catch (e) {
        console.error('Error executing query:', e)
    }
}

export async function getNoteById(id) { 
    try {
        const connect = await connection();
        const [row] = await connect.query(`SELECT * FROM notes WHERE id = ?`, [id]);
        //console.log('Connected successfully');
        //console.log(row)

        return row

    } catch (e) {
        console.error('Error executing query:', e);
    }
}

export async function createNote(title, description) {
    try {
        const connect = await connection();
        const [note] = await connect.query(`INSERT INTO notes (title, description) VALUES (? , ?)`, [title, description]);

        const noteID  = note.insertId;
        const noteCreated = getNoteById(noteID);
        //console.log(noteCreated);
        return noteCreated;

    } catch (e) {
        console.error('Error executing query:', e)
    }
}

export async function editNote(id, title, description) {
    try {
        const connect = await connection();
        const [edit] = await connect.query(`UPDATE notes SET title = ?, description = ?, timestamp = NOW() WHERE id = ?`, [title, description, id]);
        //console.log(edit);
    } catch (e) {
        console.error('Error executing', e)
    }
}

export async function deleteNote(id) {
    try {
        const noteToDelete = await getNoteById(id);

        // Note exist ??
        if (noteToDelete.length != 0) {
            
            const connect = await connection();
            const [noteDeleted] = await connect.query(`DELETE FROM notes WHERE id = ?`, [id]);
            //console.log(noteDeleted)
            console.log('Register deleted successfully');
            
            return noteDeleted

        } else {
            console.log(`Register with id: ${id} does not exist`);
        }

    } catch (e) {
        console.error('Error executing', e)
    }
}


//TESTING...

//getNoteById(10);
//getAllNotes()
//createNote('Im new title', 'my new descrition');
//deleteNote(10)
//editNote(3, '3er title', 'Shortest desc EDITED');