const router = require('express').Router();

const apiAutoresRouter = require('./api/autores.routes');
router.use('/autores', apiAutoresRouter)

const apiPostsRouter = require('./api/posts.routes');
router.use('/autores', apiPostsRouter)

module.exports = router;
