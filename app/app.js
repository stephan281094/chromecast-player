var volume = require('./volume')

var raiseVolume = document.querySelector('.raiseVolume')
var lowerVolume = document.querySelector('.lowerVolume')

raiseVolume.addEventListener('click', volume.raise)
lowerVolume.addEventListener('click', volume.lower)
