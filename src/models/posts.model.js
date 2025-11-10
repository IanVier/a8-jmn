import db from '../../config/db.js'

const selectPosts = async () => {
    const [result] = await db.query(`
        select a.id as idAutor, a.nombre, a.email, a.imagen, p.id as idPost, p.titulo, p.descripcion, p.fecha_creacion, p.categoria 
        from posts p
        left join autores a on a.id = p.autores_id;
        `);
    return result;
};

const selectById = async (postId) => {
    const [result] = await db.query(`
        select * from posts where id = ?
        `, [postId] );
    if (result.length === 0) return null;
    return result[0];
};

const insertPost = async (postData) => {
    const { titulo, descripcion, autores_id, categoria } = postData;
    const query = `
        insert into posts 
        (titulo, descripcion, autores_id, categoria) 
        values (?, ?, ?, ?)
        `;
    const values = [titulo, descripcion, autores_id, categoria];
    const [result] = await db.query(query, values);
    return result.insertId;
};


export const PostsModel = {
    selectPosts, insertPost, selectById
}