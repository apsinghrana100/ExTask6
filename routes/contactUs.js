const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

// /admin/add-product => GET
router.get('/contactpage', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'contact_us.htm'));
});

module.exports=router;