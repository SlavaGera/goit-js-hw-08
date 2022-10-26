import Player from '@vimeo/player';
import throttle from 'lodash.throttle'


const STORAGE_KEY = "videoplayer-current-time"

const options = {
    autoplay: true,
    controls: false,
    keyboard: true
}

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe, options);

let formData = {}

const onPlay = function (data) {
    formData = data
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    };

player.on('timeupdate', throttle(onPlay, 1000));    
    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

const getLocalStorage = JSON.parse(localStorage.getItem(STORAGE_KEY));
console.log(getLocalStorage);

player.setCurrentTime(getLocalStorage?.seconds).then(function (seconds) {
}).catch(function (error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});;