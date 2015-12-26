var player = require('chromecast-player')()

player.attach(function (err, p) {
  if (err) console.error('An error ocurred while attaching the player: ' + err)
  var playButton = document.querySelector('.play')
  var playButtonIcon = document.querySelector('.play i.fa')

  playButton.addEventListener('click', function () {
    p.getStatus(function (err, status) {
      if (err) console.error('An error ocurred while getting status of player: ' + err)
      if (status.playerState === 'PLAYING') {
        p.pause(function () {
          playButtonIcon.classList.remove('fa-play')
          playButtonIcon.classList.add('fa-pause')
        })
      } else {
        p.play(function () {
          playButtonIcon.classList.remove('fa-pause')
          playButtonIcon.classList.add('fa-play')
        })
      }
    })
  })
})
