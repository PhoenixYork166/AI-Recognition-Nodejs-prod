const express = require('express');
const { check } = require('express-validator');

/* Import our webScrap controllers */
const webScrapController = require('../controllers/webScrap');

const checkAuth = require('../middleware/check-auth');

/* Calling Router from express.Router() method
router is a pluggable mini-Express app */
const router = express.Router();

/* Adding a Filter '/records' before all Express routes below
in rootDir/server.js */

/** Adding a Bearer to all route below this Middleware */
router.use(checkAuth);

/* Registering http://localhost:3001/save-html
=> Express Router POST request handler */
router.post( // const { email, name, password } = req.body;
    '/save-html', 
    [
        check('htmlContent').not().isEmpty()
    ], 
    webScrapController.saveHtml
);

module.exports = router;