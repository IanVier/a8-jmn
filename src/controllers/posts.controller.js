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

const getAllByAutor = async (req, res) => {
  try {
    const { autorId } = req.params;
    if (!autorId || isNaN(parseInt(autorId))) {
          return res.status(400).json({ error: 'ID de autor no válido.' });
      }
    const result = await PostsModel.selectPostsByAutor(autorId); 
    if (result.length === 0) {
          return res.status(404).json({ message: `No se encontraron posts para el autor con ID ${autorId}.` });
      }
    res.json(result);
  } catch (error) {
    res.status(500).json({error: 'Error interno del servidor al obtener posts por autor.'})
  }
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
  getAll, newPost, getById, getAllByAutor
};

