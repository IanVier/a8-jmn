import pool from '../../dbConfig.js'; // Inyecta la conexión 

const getAll = async () => { 
    // pool.query devuelve una Promesa, usamos await y desestructuramos [rows]
    const [rows] = await pool.query('SELECT * FROM autores'); 
    return rows;
}

const create = ({nombre, email, imagen}) => {
    {
        return pool.query(
            'insert into autores (nombre, email, imagen) values (?,?,?)',
            [nombre, email, imagen]
        )
    }
}


export const Autor = { 
    getAll, create
}