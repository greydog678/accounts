var express = require('express');
var router = express.Router();

// 记账本的列表
router.get('/account', function(req, res, next) {
  res.render('../views/index.ejs');
});

// 显示添加记录的视图
router.get('/account/create', function (req, res, next) {
  res.render('../views/create.ejs');
});

module.exports = router;
