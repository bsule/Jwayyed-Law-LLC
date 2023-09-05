
document.addEventListener('DOMContentLoaded', function(){

    const offcanvas = document.getElementById('offcanvasNavbar');
    const hiddendiv = document.querySelector('.offcanvas-content');

    offcanvas.addEventListener('show.bs.offcanvas', function(){
        hiddendiv.classList.toggle('show'); // show hidden content when the navbar is clicked
    });
    offcanvas.addEventListener('hidden.bs.offcanvas', function(){
        hiddendiv.classList.toggle('show');
    });
});
