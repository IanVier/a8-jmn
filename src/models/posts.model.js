import db from '../../config/db.js'

const selectPosts = async () => {
    const [result] = await db.query('select * from posts');
    return result;
};

export const PostsModel = {
    selectPosts
}