// 导入mongoose
const mongoose = require('mongoose');
// 导入连接数据库模块
const connectDB = require('../db/db');
// 导入BookModel
const BookModel = require('./models/BookModel');

// 写一个异步立即执行函数
(async () => {
    try {
        await connectDB();
        const data = await BookModel.create({
            name: '西游记',
            author: '吴承恩',
            price: 99
        })
        console.log('创建成功', data)
    }catch (err) {
        console.error('错误', err);
    }finally {
        await mongoose.disconnect();  // 无论成功失败都关闭
    }
})();
