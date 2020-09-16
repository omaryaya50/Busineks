var lastScrollDown=0;
navbar= document.getElementById('navbar');
window.addEventListener("scroll",function(){
    var scrollDown= window.pageYOffset || document.documentElement.scrollDown;
    if (scrollDown > lastScrollDown){
        navbar.style.top="-80px";
    }
    else{
        navbar.style.top="0";
    }
    lastScrollDown=scrollDown;
})