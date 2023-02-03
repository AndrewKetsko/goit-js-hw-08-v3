import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const player = new Player('vimeo-player', {
    id: 19231868,
    width: 640
});

// console.log(localStorage.getItem("timePlayed"));

if (!localStorage.getItem("timePlayed")) { localStorage.setItem("timePlayed", 0) };

// console.log(localStorage.getItem("timePlayed"));
    
player.setCurrentTime(localStorage.getItem("timePlayed"));
    
player.on('play', () =>
    player.on('timeupdate', throttle(time => {
        localStorage.setItem("timePlayed", time.seconds);
        // console.log(localStorage.getItem("timePlayed"));
    },1000) ));
