// 导入mongoose
const mongoose = require('mongoose');
// 导入配置文件
const {DBHOST, DBNAME, DBPORT} = require('../config/config')

// 导出一个连接数据库的函数
module.exports = async function connectDB() {
    try {
        await  mongoose.connect(`mongodb://${DBHOST}:${DBPORT}/${DBNAME}`);
        console.log("数据库连接成功");
    }catch (err) {
        console.error('数据库连接失败', err)
        throw err; // 往外抛，让外层catch捕获
    }
}



