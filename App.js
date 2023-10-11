const btnBackward = document.querySelector("#btnBackward");
const btnPreSurah = document.querySelector("#btnPreSurah");
const btnPlayHouse = document.querySelector("#btnPlayHouse");
const btnNextSurah = document.querySelector("#btnNextSurah");
const btnForward = document.querySelector("#btnForward");
const songName = document.querySelector("#songName");
const songImg = document.querySelector("#songImg");
const song = document.querySelector("#song");
const volUp=document.querySelector(".vol-up")
const volDown=document.querySelector(".vol-down")

const songs = [
  {
    id: 1,
    name: "Surah",
    img: "picone.jpeg",
    reciter: "Luhaidan",
    surah: "verse1.mp3",
  },
  {
    id: 2,
    name: "Surah",
    img: "pictwo.jpeg",
    reciter: "Xalid al Jalil",
    surah: "verse2.mp3",
  },
  {
    id: 3,
    name: "Surah",
    img: "picthree.webp",
    reciter: "Nasser al Qatami",
    surah: "verse3.mp3",
  },
];

let current = 0;

songImg.src = `./images/${songs[current].img}`;
songName.textContent = `${songs[current].name} by ${songs[current].reciter}`;
song.src = `./verses/${songs[current].surah}`;

btnPlayHouse.addEventListener("click", () => {
  if (song.paused) {
    playSong()
  } else {
    pauseSong()
}});

volDown.onclick =()=>{
    if(song.volume<=0.1){
        song.volume.disabled=true
    }else{
        song.volume -=0.1
    }
}

volUp.onclick =()=>{
    if(song.volume<=0.9){
        song.volume +=0.1
    }else{
        song.volume=0.8
    }
}

function playSong(){
    btnPlayHouse.innerHTML = `<i class="fa-solid fa-pause"></i>`;
    song.play();
}

function pauseSong(){
    btnPlayHouse.innerHTML = `<i class="fa-solid fa-play"></i>`;
    song.paused();
  }


btnForward.onclick =()=>{
    song.currentTime +=5
}

btnBackward.onclick =()=>{
    song.currentTime -=5
}

btnNextSurah.onclick = () => {
  if (current > songs.length -1) {
    current = 0;
  } else {
    current++;    
  }
  writeData(current)
  playSong()
};

btnPreSurah.onclick = () => {
  if(current<=0){
    current=songs.length-1
  }else{
    current--
  }
  writeData(current)
  playSong()

  
};

function writeData(c) {
  songImg.src = `./images/${songs[current].img}`;
  songName.textContent = `${songs[current].name} by ${songs[current].reciter}`;
  song.src = `./verses/${songs[current].surah}`;
}
