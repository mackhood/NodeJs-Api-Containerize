const express = require('express');
const apiController = require('../controllers/api');

const router = express.Router();

//router.get('/playbook/:id', nextController.playbook);
router.post('/api/query', apiController.executeQuery);

module.exports = router;


