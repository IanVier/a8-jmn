import { PostsModel } from "../models/posts.model.js";

const getAll = async (req, res) => {
  try {
    const result = await PostsModel.selectPosts();
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      error: 'Error al obstener posts.'
    });
  }
};

const getById = async (req, res) => {
  const { postId } = req.params;
  const post = await PostsModel.selectById(postId);
  if (!post) return res.status(404).json({message: 'Post id no existe'});
  res.json(post);
};

const newPost = async (req, res) => {
  try {
    const insertID = await PostsModel.insertPost(req.body);
    const post = await PostsModel.selectById(insertID);
    res.json(post);
  } catch (error) {
    return res.status(500).json({error: 'Error al insertar el Post!'});
  }
};

export const Posts = {
  getAll, newPost, getById
};

