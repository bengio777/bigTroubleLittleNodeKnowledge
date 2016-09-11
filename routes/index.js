var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Big Trouble Little Node Knowledge',
    src: "http://nerdist.com/wp-content/uploads/2015/10/Big-Trouble-in-Little-China.jpg",
    quote: "Like I told my last wife, I says, Honey, I never drive faster than I can see. Besides that, its all in the reflexes.",
    russel: "wwkrd?",
 });
});

module.exports = router;
