console.log("Welcome to Spotify");

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');

let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let materSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName :"Let me love you",filePath:"songs/1.mp3",coverPath :"covers/1.jpg"},
    {songName :"bewajah",filePath:"songs/2.mp3",coverPath :"covers/2.jpg"},
    {songName :"Ab tum hi ho",filePath:"songs/3.mp3",coverPath :"covers/3.jpg"},
    {songName :"Aise kyu",filePath:"songs/4.mp3",coverPath :"covers/4.jpg"},
    {songName :"Aashiqi",filePath:"songs/5.mp3",coverPath :"covers/5.jpg"},
    {songName :"Kabira",filePath:"songs/6.mp3",coverPath :"covers/6.jpg"},
    {songName :"Perfect",filePath:"songs/7.mp3",coverPath :"covers/7.jpg"},
    {songName :"Love me like you do",filePath:"songs/8.mp3",coverPath :"covers/8.jpg"},
    {songName :"Tere bin",filePath:"songs/9.mp3",coverPath :"covers/9.jpg"},
    {songName :"bheegi bheegi",filePath:"songs/10.mp3",coverPath :"covers/10.jpg"},
]

songItem.forEach((element,i)=>{
    
    element.getElementsByTagName("img")[0].src= songs[i].coverPath;
    element.getElementsByClassName("songName").innerText = songs[i].songName;
})
//audioElement.play();


//Handle play/pause click
 masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime <= 0){
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
//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    

    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
  
   myProgressBar.value= progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
    })

    const makeAllPlays = ()=>{
        Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
            
                element.classList.add('fa-play-circle');
                element.classList.remove('fa-pause-circle');  
            })
    };

    


   Array.from( document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        masterSongName.innerText = songs[songIndex].songName;
         makeAllPlays();
         songIndex= parseInt(e.target.id);
       e.target.classList.remove('fa-play-circle');
       e.target.classList.add('fa-pause-circle');
      
       audioElement.src = songs[songIndex].filePath;
       masterSongName.innerText = songs[songIndex].songName;
       audioElement.currentTime = 0;
       audioElement.play();
       masterPlay.classList.remove('fa-play-circle');
       masterPlay.classList.add('fa-pause-circle');
    })
   })

   document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex = 0;
    }
    else{
        songIndex +=1;
    }
    audioElement.src = "songs[songIndex].filepath";
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
   })

   document.getElementById('next').addEventListener('click',()=>{
    if(songInde<=0){
        songIndex = 0;
    }
    else{
        songIndex -=1;
    }
    audioElement.src = "songs[songindex].filepath";
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
   })

   