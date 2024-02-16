/*
    Rutas de items
    host + /api/items
*/

const { Router } = require('express');
const { getItemById, getItemsByQuery } = require('../controllers/items');

const router = Router();

router.get('/:id', getItemById);
router.get('', getItemsByQuery);

module.exports = router;