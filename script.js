let songIndex = 0;
let audioElement = new Audio ("songs/1.mp3")
let masterPlay = document.getElementById("masterplay")
let myProgressBar = document.getElementById("myBar")
let gif=document.getElementById("gif")
let songitem = Array.from(document.getElementsByClassName("songItem"))
let play = Array.from(document.getElementsByClassName("PLAY"))
let masterSongname = document.getElementById("s")


let songs = [
    {songName: "GYPSY (BALAM THANEDAR)" , filePath:"songs/1.mp3" , coverPath: "covers/1.jpg"},
    {songName: "JADUGAAR - PARADOX" , filePath:"songs/2.mp3" , coverPath: "covers/2.jpg"},
    {songName: "MANN MERI JANN - KING" , filePath:"songs/3.mp3" , coverPath: "covers/3.jpg"},
    {songName: "NA JAA TUU - KING" , filePath:"songs/4.mp3" , coverPath: "covers/4.jpg"},
    {songName: "BARESHEIN-ANUV JAIN" , filePath:"songs/5.mp3" , coverPath: "covers/5.jpg"},
    {songName: "WALLIAN-HARNOOR" , filePath:"songs/6.mp3" , coverPath: "covers/6.jpg"},
    {songName: "ZARA-ZARA LOFI" , filePath:"songs/7.mp3" , coverPath: "covers/7.jpg"},
    {songName: "HAWAYEIN-LOFI" , filePath:"songs/8.mp3" , coverPath: "covers/8.jpg"},
    {songName: "MAI RANG SHARBATO KA -LOFI" , filePath:"songs/9.mp3" , coverPath: "covers/9.jpg"},
    {songName: "TU AA KEE DEKH LEE-KING" , filePath:"songs/10.mp3" , coverPath: "covers/10.jpg"},
]
songitem.forEach(function(element  , i){
    element.getElementsByTagName("img")[0].src =songs[i].coverPath
    element.getElementsByClassName("songname")[0].innerText = songs[i].songName
})

masterPlay.addEventListener('click' , function(){
    if (audioElement.paused || audioElement.currentTime<=0){
        audioElement.play()
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
        gif.style.opacity = 1
    }
    else{
        audioElement.pause()
        masterPlay.classList.remove('fa-pause-circle')
        masterPlay.classList.add('fa-play-circle')
        gif.style.opacity = 0
    }
})

audioElement.addEventListener('timeupdate' ,function(){
   progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
   console.log(progress)
   myProgressBar.value = progress
})
myProgressBar.addEventListener('change', function(){
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100
})
const makeAllPlays = ()=>{
   play.forEach((element)=>{
    element.classList.remove('fa-pause-circle')
    element.classList.add('fa-play-circle')
   })
}
play.forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays()
        songIndex = parseInt(e.target.id)
        e.target.classList.remove('fa-play-circle')
        e.target.classList.add('fa-pause-circle')
        audioElement.src = `songs/${songIndex+1}.mp3`
        masterSongname.innerText = songs[songIndex].songName
        audioElement.currentTime = 0
        audioElement.play()
        gif.style.opacity = 1
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
    })
})

document.getElementById("next").addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex+=1
    }
    audioElement.src = `songs/${songIndex+1}.mp3`
    masterSongname.innerText = songs[songIndex].songName
    audioElement.currentTime = 0
    audioElement.play()
    gif.style.opacity = 1
    masterPlay.classList.remove('fa-play-circle')
    masterPlay.classList.add('fa-pause-circle')

})
document.getElementById("previous").addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex-=1
    }
    audioElement.src = `songs/${songIndex+1}.mp3`
    masterSongname.innerText = songs[songIndex].songName
    audioElement.currentTime = 0
    audioElement.play()
    gif.style.opacity = 1
    masterPlay.classList.remove('fa-play-circle')
    masterPlay.classList.add('fa-pause-circle')

})