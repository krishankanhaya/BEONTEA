$(window).on("load",function(){
    $('.loader-wraper').css('display','none');
});


var slideIndex = 0;
showSlide();
function showSlide(){
    var i;
    var slides =document.getElementsByClassName('slides');
    for(i=0;i<slides.length;i++){
        slides[i].style.display= "none";
    }
    slideIndex ++;
    if(slideIndex>slides.length){
        slideIndex=1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlide,4000);

}
