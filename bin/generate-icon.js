/**
 * 读取tabler-icons/icons下的文件，生成JSON数组
 * 用于Icon文档展示所有icon
*/

const fs = require('fs');
const path = require('path');

const files = fs.readdirSync(path.join(__dirname, '../node_modules/tabler-icons/icons/'))

const iconsJson = files.map(item => {
  if ((/\.svg$/).test(item)) {
    return item.slice(0, -4)
  }
}).filter(v => v)

fs.writeFileSync(path.join(__dirname, '../demo/components/all-icon/icons.json'), JSON.stringify(iconsJson))