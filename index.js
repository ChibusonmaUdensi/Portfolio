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
    isMuted = !isMuted;


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
        setTimeout(() =>{
            playMusic.style.display = 'none';
        }, 1000);
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
    setTimeout(() =>{
        pauseMusic.style.display = 'none';
    }, 1000);

}