var mediastream = require('mediastream')

var media = mediastream({video : true})

media.on('data', function(data) {
  console.log('video stream data', data)
})

media.on('error', function(err) {
  console.log('error!', err)
})
