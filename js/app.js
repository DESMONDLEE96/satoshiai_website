window.addEventListener("scroll", (e) => {
    let wrap_nav = document.querySelector(".wrap_nav");
    let site_nav = document.querySelector("#site_nav");
    if(window.scrollY >= 100){
        wrap_nav.classList.add("wrap_nav_active");
        site_nav.classList.add("navbar_sticky");
    }else{
        wrap_nav.classList.remove("wrap_nav_active");
        site_nav.classList.remove("navbar_sticky");
    }
});