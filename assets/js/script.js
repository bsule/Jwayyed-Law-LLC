
document.addEventListener('DOMContentLoaded', function(){

    const offcanvas = document.getElementById('offcanvasNavbar');
    const hiddendiv = document.querySelector('.offcanvas-content');

    offcanvas.addEventListener('show.bs.offcanvas', function(){
        hiddendiv.classList.toggle('show');
    });
    offcanvas.addEventListener('hidden.bs.offcanvas', function(){
        hiddendiv.classList.toggle('show');
    });
});


const btn = document.querySelector('#btn-video');
const videoContainer = document.querySelector('.video-container');
const close = document.querySelector('.close');
const video = document.querySelector('#video');


btn.addEventListener('click', ()=>{
    videoContainer.classList.add('show');
    video.play();
})

videoContainer.addEventListener('click', function(event){
    if(event.target.id !== "video"){
        videoContainer.classList.remove('show');
        video.pause();
    }
})

close.addEventListener('click', ()=>{
    videoContainer.classList.remove('show');
    video.pause();
})