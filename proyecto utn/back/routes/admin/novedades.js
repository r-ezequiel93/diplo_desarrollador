var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('admin/novedades', { //login.hbs
        layout: 'admin/layout' //layout.hbs
    });
});

module.exports = router;