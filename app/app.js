var player = require('chromecast-player')()

player.attach(function (err, p) {
  if (err) console.error('An error ocurred while attaching the player: ' + err)
  var pauseButton = document.querySelector('.pause')
  var playButton = document.querySelector('.play')

  pauseButton.addEventListener('click', function () {
    p.pause()
  })
  playButton.addEventListener('click', function () {
    p.play()
  })
})
