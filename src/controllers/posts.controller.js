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

export const Posts = {
  getAll
};

