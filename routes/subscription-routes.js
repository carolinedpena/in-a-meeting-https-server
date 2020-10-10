const { Router } = require('express');
const express = require('express');
const subscriptionController = require('../controllers/subscription-controller');

const router = express.Router();

// POST 
router.post('/subscription-listen', subscriptionController.subscriptionListen);

module.exports = router;