import pool from '../../dbConfig.js';

const getAll = async () => {
        //desestructuramos [post] para quedarno con el primer valor
        const [posts] = await pool.query(
        'select a.nombre, p.titulo, p.descripcion, p.fecha_creacion from posts p left join autores a on a.id = p.autores_id;');
    return posts;
}

export const Posts = {
    getAll
}
