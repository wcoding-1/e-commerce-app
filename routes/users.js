var express = require('express');
var router = express.Router();
const controller = require('../controller/controller')




/* GET users listing. */
router.get('/', controller.getUsers,function(req, res, next) {

});

module.exports = router;
