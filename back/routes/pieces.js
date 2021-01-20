const express = require('express');
const router = express.Router();
const PiecesController = require('../controllers/piecesController');

router.post('/new', PiecesController.newPiece);
router.get('/getpieces', PiecesController.getPieces);
router.put('/update/:id', PiecesController.updatePieces);
router.delete('/delete/:id', PiecesController.deletePieces);

module.exports = router;