var menubar = require('menubar')

menubar({
  dir: __dirname + '/app',
  width: 300,
  height: 50,
  icon: __dirname + '/app/Icon.png',
  preloadWindow: true
})
