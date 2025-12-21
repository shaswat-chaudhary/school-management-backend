const express = require('express');
const router = express.Router();
const { createList, getData } = require('../controller/school');

router.post('/school', createList);
router.get('/schools', getData);

module.exports = router;