var express = require('express');
var router = express.Router();
const moment = require('moment');
const AccountModel = require('../models/AccountModel');


// 显示记账本的列表
router.get('/account', async function(req, res, next) {
    try {
        // 读取数据库
        const data = await AccountModel.find().sort({time: -1});

        // 渲染模板
        res.render('list',{
            accounts:data,
            moment
        })
    }catch (err) {
        // next()   → 继续执行下一个普通中间件
        //next(err) → 直接进入 错误处理中间件
        next(err);
    }
})

// 显示添加记录的视图
router.get('/account/create', function (req, res, next) {
  res.render('../views/create.ejs');
});

// 新增记录
router.post('/account', async (req, res, next) => {
  // 插入数据库
  try {
     await AccountModel.create({
      ...req.body,
      // 修改time属性的值
      time: moment(req.body.time).toDate()
    })
    // 成功提醒
    res.render('success', {msg: '添加成功呦', url: '/account'});

  }catch (err) {
    next(err);
  }
})

// 删除记录
router.get('/account/:id', async (req, res, next) =>{
    try{
        const { id } = req.params;
        // 按 id 删除，并返回被删除的文档
        const account = await AccountModel.findByIdAndDelete(id);

        res.render('success', {
            msg: account? '删除成功~~~' : '记录不存在或已被删除',
            url: '/account'
        })

    }catch(err) {
        next(err);
    }
})

module.exports = router;
