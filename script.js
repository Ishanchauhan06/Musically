console.log("Welcome to spotify");

let songindex = 0;
let audioelement = new Audio('song/1.mp3');
let masterplay = document.getElementById("masterplay")
let myprogressbar = document.getElementById("myprogressbar");

let gif = document.getElementById("gif");
let songitem = Array.from(document.getElementsByClassName('songitem'));
let songs = [
    {
        songname: "kali-kali zulfoon", filepath: "song/1.mp3", coverpath: "tamasha.jpg"
    },
    {
        songname: "Dila du ghar Chandigarh me", filepath: "song/2.mp3", coverpath: "cover/2.jpg"
    },
    {
        songname: "Laal Ghagra", filepath: "song/3.mp3", coverpath: "cover/3.jpg"
    },
    {
        songname: "Rataan lambiyan", filepath: "song/4.mp3", coverpath: "cover/4.jpg"
    },
    {
        songname: "Ranjha- Shershah", filepath: "song/5.mp3", coverpath: "cover/5.jpg"
    },
    {
        songname: "Hardum Humdum", filepath: "song/6.mp3", coverpath: "cover/6.jpg"
    },
    {
        songname: "kali-kali zulfoon", filepath: "song/3.mp3", coverpath: "cover/3.jpg"
    },


]
songitem.forEach((element, i) => {
    console.log(element, i);
    element.getElementsByTagName('img')[0].src[i] = songs[i].coverpath;
    element.getElementsByClassName('songname')[0].innerText = songs[i].songname;
})


// **************************play music and pauese music code*************************//
masterplay.addEventListener('click', () => {
    if (audioelement.paused || audioelement.currentTime <= 0) {
        audioelement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add("fa-pause-circle");
        gif.style.opacity = 1;
    } else {
        audioelement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add("fa-play-circle");
        gif.style.opacity = 0;
    }
})
// listen to events
audioelement.addEventListener('timeupdate', () => {
    // console.log('timeupdate');
    //  update seek bar
    progress = parseInt((audioelement.currentTime / audioelement.duration) * 100)
    //   console.log(progress);
    myprogressbar.value = progress;
})

myprogressbar.addEventListener('change', () => {
    audioelement.currentTime = myprogressbar.value * audioelement.duration / 100;
})

const makeplay = () => {
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

    })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        // console.log(e.target)
        makeplay();
        songindex = parseInt(e.target.id);
        // console.log(index);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioelement.src = 'song/${index}.mp3' ;
        audioelement.src = 'song/4.mp3';
        audioelement.currentTime = 0;
        audioelement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add("fa-pause-circle");
    })
})
