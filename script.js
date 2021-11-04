console.log("Welcome to Spotify");

//Intializing the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1. Experience.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
// audioElement.play();

let = songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "1. Experience", filePath: "songs/1.mp3", coverPath: "covers/cover (1).jpg"},
    {songName: "2. Visions of Gideon", filePath: "songs/2.mp3", coverPath: "covers/cover (2).jpg"},
    {songName: "3. Jacob and the Stone", filePath: "songs/3.mp3", coverPath: "covers/cover (3).jpg"},
    {songName: "4. Tree Synthesisers", filePath: "songs/4.mp3", coverPath: "covers/cover (4).jpg"},
    {songName: "5. Proving Window", filePath: "songs/5.mp3", coverPath:  "covers/cover (5).jpg"},
    {songName: "6. Hand Covers Bruise", filePath: "songs/6.mp3",  coverPath: "covers/cover (6).jpg"},
    {songName: "7. Day One", filePath: "songs/7.mp3", coverPath: "covers/cover (7).jpg"},
    {songName: "8. Dimensions", filePath: "songs/8.mp3", coverPath: "covers/cover (8).jpg"},
    {songName: "9. End Titles (Dunkirk)", filePath: "songs/9.mp3", coverPath: "covers/cover (9).jpg"},
    {songName: "10. Another One Bites The Dust", filePath: "songs/10.mp3", coverPath: "covers/cover (10).jpg"},
]

songItems.forEach((element, i)=>{
element.getElementsByTagName("img")[0].src = songs[i].coverPath;
element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})

//Handle Play/Pause
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }

    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

//Listening to Events
audioElement.addEventListener('timeupdate', ()=>{

    //Updating the Seekbar
    let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress; 

})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>9){
        songIndex = 0;
    }
    else{
        songIndex +=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})