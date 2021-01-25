const express = require('express');
const router = express.Router();
const PiecesController = require('../controllers/piecesController');
const auth = require('../middleware/auth');

router.post('/', auth, PiecesController.newPiece);
router.get('/', PiecesController.getPieces);
router.put('/:id', auth, PiecesController.updatePieces);
router.delete('/:id', auth, PiecesController.deletePieces);

module.exports = router;