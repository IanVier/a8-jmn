import db from '../../config/db.js';

const selectPosts = async () => {
        //desestructuramos [post] para quedarno con el primer valor
        const [posts] = await db.query(
        `select a.nombre, p.titulo, p.descripcion, p.fecha_creacion 
        from posts p 
        left join autores a on a.id = p.autores_id;`);
    return posts;
}

export const PostsModel = {
    selectPosts
}
