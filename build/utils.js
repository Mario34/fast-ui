const path = require('path');
const os = require('os')

exports.resolve = function(dir) {
  return path.join(__dirname, '..', dir)
}

exports.staticPath = function(dir) {
  return path.join('static/', dir)
}

exports.localAddress = function(dir) {
  var network = os.networkInterfaces()
  for (var key in network) {
    for (var i = 0; i < network[key].length; i++) {
      var item = network[key][i]
      if(item.family === 'IPv4'&& item.address !== '127.0.0.1' && !item.internal){
        return item.address
      }
    }
  }
}