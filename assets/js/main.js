const slides = document.querySelector("#slides");
const slide = document.querySelector(".slider__item");
const next = document.querySelector("#btn-next");
const prev = document.querySelector("#btn-prev");

// cookie
const times = document.querySelector(".times");
const usecookie = document.querySelector("#usecookie");

times.onclick = function() {
    usecookie.style.display = "none";
}


window.onscroll = function () {
    scrollFunction();
};

let back_to_top = document.getElementById("scrollToTop");
function scrollFunction() {
    if(back_to_top != null){
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            back_to_top.classList.add("block");
            back_to_top.classList.remove("hidden");
        } else {
            back_to_top.classList.add("hidden");
            back_to_top.classList.remove("block");
        }
    }
}

back_to_top.onclick = function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}