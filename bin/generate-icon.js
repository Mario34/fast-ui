/**
 * 读取feather-icons/dist/icons/下的文件，生成JSON数组
 * 用于Icon文档展示所有icon
*/

const fs = require('fs');
const path = require('path');
const files = fs.readdirSync(path.join(__dirname, '../node_modules/feather-icons/dist/icons/'))
  .filter(i => (/\.svg$/).test(i))

const iconsJson = files.map(item => item.slice(0, -4))

fs.writeFileSync(path.join(__dirname, '../demo/components/all-icon/icons.json'), JSON.stringify(iconsJson))