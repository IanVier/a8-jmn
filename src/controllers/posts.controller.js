import { PostsModel } from '../models/posts.model.js'

export const getAll = async (req, res) => {
  try {
    const posts = await PostsModel.selectPosts();
    res.json(posts);
  } catch (error) {
    return res.status(500).json({error:  'Error al obtener posts'})
  }
};

export const Posts = {
  getAll
};