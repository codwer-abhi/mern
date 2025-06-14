const express = require('express');
const router = express.Router();
const { handleservice } = require('../Controllers/services-controller.js');
router.get('/service', handleservice);
module.exports = router;