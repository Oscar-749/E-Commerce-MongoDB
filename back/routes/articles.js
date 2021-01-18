const express = require('express');
const ArticlesController = require('../controllers/articleController');
const router = express.Router();

router.post('/new', ArticlesController.newArticles);
router.get('/all', ArticlesController.getArticles);
router.put('/update/:id', ArticlesController.updateArticles);
router.delete('/delete/:id', ArticlesController.deleteArticles);

module.exports = router;