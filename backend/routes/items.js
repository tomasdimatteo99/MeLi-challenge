/*
    Rutas de items
    host + /api/items
*/

const { Router } = require('express');
const { itemGetbyId, itemGetbyQuery } = require('../controllers/items');

const router = Router();

router.get('/:id', itemGetbyId);
router.get('', itemGetbyQuery);

module.exports = router;