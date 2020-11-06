var fs = require('fs');
var youtubedl = require('youtube-dl');
const ytdl = require('ytdl')

// ytdl "http://www.youtube.com/watch?v=_HSylqgVYQI" > myvideo.mp4

var video = youtubedl(url, ['--format=18'], { cwd: __dirname });


video.on('info', (info) => {
    console.log('Download started... ');
    console.log('filename: ' + info._filename);
    console.log('size', +info.size);
    performDownload(info._filename)
});

function performDownload(fileName) {
    // video.pipe(fs.createWriteStream(`./videos/${fileName}.mp4`));
    video.pipe(fs.createWriteStream(`../../../Music/saturday/videos/${fileName}.mp4`));
}