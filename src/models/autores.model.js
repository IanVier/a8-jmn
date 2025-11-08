import db from '../../config/db.js'; // Inyecta la conexión 

const selectAutores = async () => { 
    const [result] = await db.query('SELECT * FROM autores'); 
    return result;
}

const selectById = async (autorId) => {
    const [result] = await db.query(
        'select nombre, email, imagen from autores where id = ? ',
        [autorId] );
     /*las select devuelven siempre un array */
    if (result.length === 0) return null;
    return result[0];
};

const insertAutor = async ({nombre, email, imagen}) => {
    const [result] = await db.query(
        'insert into autores (nombre, email, imagen) values (?, ?, ? )',
        [nombre, email, imagen] );
    return result;
};

export const AutoresModel = { 
    selectAutores, selectById, insertAutor
}