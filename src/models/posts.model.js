import db from '../../config/db.js'

const selectPosts = async () => {
    const [result] = await db.query('select * from posts');
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