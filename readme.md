# domnode-usermedia

    npm install mediastream

use HTML5 [WebRTC](http://www.html5rocks.com/en/tutorials/getusermedia/intro/) the node way -- with streams

    var media = mediastream({video: true})

`media` is a readable stream and speaks stream events: `data`, `error` and `end`. that means you can pipe media output to anything that accepts streams, such as an XHR. in this case the `data` events will be DataURI representations of the user's webcam frame captures

## limitations

browsers only let you get webcam video right now (even though you can include `audio: true` in the options there is no way to capture the audio)

## to generate demo-bundle.js using browserify:

    npm install browserify -g
    browserify demo.js -o demo-bundle.js

MIT LICENSE