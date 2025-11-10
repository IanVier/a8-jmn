import { AutoresModel } from '../models/autores.model.js'

const getAll = async (req, res) => {
 try {
  const autores = await AutoresModel.selectAutores();
  res.json(autores)
 } catch (error) {
    return res.status(500).json({error: 'Error al obtener clientes.'})
 }
};

const getById = async (req, res) => {
  const { autorId } = req.params;
  const autor = await AutoresModel.selectById(autorId);
  if (!autor) return res.status(404).json({message: 'Autor no existe'})
  res.json(autor);
};

const create = async (req, res) => {
  const { insertId }  = await AutoresModel.insertAutor(req.body);
  const autor = await AutoresModel.selectById(insertId);
  res.json(autor);
};

export const Autores = {
  getAll, getById, create
};