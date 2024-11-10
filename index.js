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
  
