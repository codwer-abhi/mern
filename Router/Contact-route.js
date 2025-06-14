const express = require('express');
const router = express.Router();
const {handlecontact}=require('../Controllers/contact-controller');
router.post('/',handlecontact)
module.exports=router