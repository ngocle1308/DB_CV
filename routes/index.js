var express = require('express');
var router = express.Router();

const homeController = require('../controller/home_controller');
const profileController = require('../controller/profile_controller');
/* GET home page. */

router.get('/', homeController.index);
router.get('/about', profileController.index);
module.exports = router;
