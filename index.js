var menubar = require('menubar')

var mb = menubar({
  dir: __dirname + '/app',
  width: 300,
  height: 50,
  icon: __dirname + '/app/Icon.png',
  preloadWindow: true
})

mb.on('show', function () {
  mb.window.webContents.send('show')
})
