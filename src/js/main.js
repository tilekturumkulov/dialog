let callBtn = document.querySelector('.call')
let overlay = document.querySelector('.overlay')
let closeBtn = document.querySelector('.overlay__close')

callBtn.onclick = function () {
    overlay.style.display = 'flex'
}

closeBtn.onclick = function () {
    overlay.style.display = 'none'
}

overlay.onclick = function (event) {
    if (event.target.classList.contains('overlay')){
        overlay.style.display = 'none'
    }
}



let im = new Inputmask("+\\9\\96 (999)-99-99");

let formTel = document.querySelector('#tel')

im.mask(formTel)




let videoBtn = document.querySelector('.video-btn')
let video = document.querySelector('.video')
let videoClose = document.querySelector('.video__close')

videoBtn.onclick = function () {
    video.style.display = 'flex'
}


video.onclick = function (event) {
    if (event.target.classList.contains('video')){
        video.style.display = 'none'
    }
}

videoClose.onclick = function () {
    video.style.display = 'none'
}


$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      $('.tabs').find('.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
});




let beginBtn = document.querySelector('.begin__btn')
beginBtn.onclick = function () {
    overlay.style.display = 'flex'
}

let aBtn = document.querySelector('.a1-btn')
aBtn.onclick = function () {
    overlay.style.display = 'flex'
}

let bBtn = document.querySelector('.a2-btn')
bBtn.onclick = function () {
    overlay.style.display = 'flex'
}

let cBtn = document.querySelector('.b1-btn')
cBtn.onclick = function () {
    overlay.style.display = 'flex'
}

let dBtn = document.querySelector('.b2-btn')
dBtn.onclick = function () {
    overlay.style.display = 'flex'
}

let licenseBtn = document.querySelector('.license__btn')
licenseBtn.onclick = function () {
    overlay.style.display = 'flex'
}

let freeBtn = document.querySelector('.free__btn')
freeBtn.onclick = function () {
    overlay.style.display = 'flex'
}

let benefitsBtn = document.querySelector('.benefits__btn')
benefitsBtn.onclick = function () {
    overlay.style.display = 'flex'
}

let formBtn = document.querySelector('.form__btn')
formBtn.onclick = function () {
    overlay.style.display = 'flex'
}


let pfirstBtn = document.querySelector('.pfirst')
pfirstBtn.onclick = function () {
    video.style.display = 'flex'
}

let psecondBtn = document.querySelector('.psecond')
psecondBtn.onclick = function () {
    video.style.display = 'flex'
}

let pthirdBtn = document.querySelector('.pthird')
pthirdBtn.onclick = function () {
    video.style.display = 'flex'
}

let pfourthBtn = document.querySelector('.pfourth')
pfourthBtn.onclick = function () {
    video.style.display = 'flex'
}