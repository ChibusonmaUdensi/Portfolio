document.addEventListener("DOMContentLoaded", function () {
    const icons = document.querySelectorAll('.icon-circle');

    icons.forEach((icon, index) => {
        icon.style.animationDelay = `${index * 0.2}s`;     
        icon.style.animationPlayState = 'running';     });
});

function navigateTo(page) {
    if (page === 'home') {
        window.location.href = 'portfolio.html';
    } }
    
function switchTo(sectionClass){
    const element = document.querySelector(sectionClass);
    if (element){
        element.scrollIntoView({behavior:'smooth'});
    }
}
let isMuted = true;
function toggleMute(){
   

    const playMusic = document.querySelector('.hover-text-music');
    const pauseMusic = document.querySelector('.hoverr-text-music')
    const musicOnIcon = document.querySelector('.music-on')
    const musicOffIcon = document.querySelector('.music-off')
    const toggleOnIcon = document.querySelector('#toggle-on');
    const toggleOffIcon = document.querySelector('#toggle-off');
    const audio = document.getElementById('myAudio');
    if (isMuted){
        toggleOnIcon.style.display = 'none';
        toggleOffIcon.style.display = 'inline'
        musicOffIcon.style.display = 'block';
        musicOnIcon.style.display = 'none';
        playMusic.style.display = 'block';
        pauseMusic.style.display = 'none';
        audio.pause()
       
        }
      else {
        toggleOnIcon.style.display = 'inline';
        toggleOffIcon.style.display = 'none';
        audio.play()
        musicOffIcon.style.display = 'none';
        musicOnIcon.style.display = 'block';
        playMusic.style.display = 'none';
        pauseMusic.style.display = 'block';
    }
}

const toggleBox = document.querySelector('.toggle-box');

toggleBox.addEventListener('mouseleave', function () {
    const pauseMusic = document.getElementsByClassName('hoverr-text-music')[0]; 
    const playMusic = document.getElementsByClassName('hover-text-music')[0];
    if (playMusic) {
        playMusic.style.display = 'none'; 
    }
    if (pauseMusic) {
        pauseMusic.style.display = 'none'; 
    }
});
toggleBox.addEventListener('mouseenter', function() {
    const pauseMusic = document.getElementsByClassName('hoverr-text-music')[0]; 
    if (pauseMusic && !isMuted) {
        pauseMusic.style.display = 'block'; 
    }
})

const option1 = document.querySelector('.button1');
const option2 = document.querySelector('.button2');
const popup = document.getElementsByClassName('sectionpop')[0];
const audio = document.getElementById('myAudio'); // Reference to the audio element

function userChoice(option){
    if (option === 'option1'){
        popup.style.display = 'none';
    }
    
    if (option === 'option2'){
        isMuted = false;
        audio.play();
        toggleMute();
        popup.style.display = 'none';
        
    }
}
option1.addEventListener('click', () => userChoice('option1'));
option2.addEventListener('click', () => userChoice('option2'));
const toggleOnIcon = document.querySelector('#toggle-on');
const toggleOffIcon = document.querySelector('#toggle-off');

toggleOnIcon.addEventListener('click', () => {
    isMuted = true; // Set to unmuted
    toggleMute(); // Update UI and audio state
});

toggleOffIcon.addEventListener('click', () => {
    isMuted = false; // Set to muted
    toggleMute(); // Update UI and audio state
});