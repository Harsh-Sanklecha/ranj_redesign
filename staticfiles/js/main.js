window.onscroll = function () { myFunction() };
var sticky = document.getElementById("navBar").offsetTop;
function myFunction() {
    if (window.pageYOffset > sticky) {
        document.getElementById("navBar").classList.add("scroll");
        document.getElementById("logoHolder").style.top = "12px";
        document.getElementById("logoHolderDark").style.top = "15px";
        document.getElementById("logoImg").classList.add("scroll");
        document.getElementById("logoImgDark").classList.add("scroll");
        document.getElementById("logoCls").style.top = "20px";
        document.getElementById("ham1").classList.add("scroll");
        document.getElementById("ham2").classList.add("scroll");
        document.getElementById("ham3").classList.add("scroll");
    }
    else {
        document.getElementById("navBar").classList.remove("scroll");
        document.getElementById("logoHolder").style.top = "20px";
        document.getElementById("logoHolderDark").style.top = "30px";
        document.getElementById("logoImg").classList.remove("scroll");
        document.getElementById("logoImgDark").classList.remove("scroll");
        document.getElementById("logoCls").style.top = "30px";
        document.getElementById("ham1").classList.remove("scroll");
        document.getElementById("ham2").classList.remove("scroll");
        document.getElementById("ham3").classList.remove("scroll");
    }
}
function openNav() {
    document.getElementById("mySidenav").classList.add("open");
    document.querySelector('.animate__animated').classList.remove('animate__fadeOutDown');
    document.querySelector('.unordered').classList.remove('animate__animated', 'animate__fadeOutDown');
    document.querySelector('.copyright').classList.remove('animate__animated', 'animate__fadeOutDown');
    document.querySelector('.animate__animated').classList.add('animate__fadeInUp');
    document.querySelector('.animate__animated').style.setProperty('animation-delay', '0.2s');
    document.querySelector('.unordered').classList.add('animate__animated', 'animate__fadeInUp');
    document.querySelector('.unordered').style.setProperty('animation-delay', '0.8s');
    document.querySelector('.copyright').classList.add('animate__animated', 'animate__fadeInUp');
    document.querySelector('.copyright').style.setProperty('animation-delay', '1.2s');
}

function closeNav() {
    setTimeout(function () { document.getElementById("mySidenav").classList.remove("open") }, 1100);
    document.querySelector('.animate__animated').classList.remove('animate__fadeInUp');
    document.querySelector('.unordered').classList.remove('animate__animated', 'animate__fadeInUp')
    document.querySelector('.copyright').classList.remove('animate__animated', 'animate__fadeInUp')
    document.querySelector('.animate__animated').classList.add('animate__fadeOutDown');
    document.querySelector('.animate__animated').style.setProperty('animation-delay', '0.8s');
    document.querySelector('.unordered').classList.add('animate__animated', 'animate__fadeOutDown')
    document.querySelector('.unordered').style.setProperty('animation-delay', '0.4s');
    document.querySelector('.copyright').classList.add('animate__animated', 'animate__fadeOutDown')
    document.querySelector('.copyright').style.setProperty('animation-delay', '0s');
}
// Testimonial-logic
$(document).ready(function () {
    $(".slider").slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        adaptiveHeight: true,
        fade: !0,
        cssEase: 'linear'
    });
});

//GSAP Animations
TweenLite.defaultEase = Linear.easeNone;
var controller = new ScrollMagic.Controller()
var animateIn = new TimelineMax();
var animateIn2 = new TimelineMax();

animateIn
    .from("#heading", 0.4, { autoAlpha: 0, y: 30 }, "1.4")
    .from("#para", 0.4, { autoAlpha: 0, y: 30 }, "1")
    .from(".text-container",0.3,{scaleY:0,transformOrigin: "bottom"},"0.5")
    .fromTo("#overDiv", 0.7, {}, { xPercent: 100, ease: "slow(0.5, 0.7, false)" }, "0")
    .fromTo("#over", 0.7, {}, { xPercent: -100, ease: "slow(0.5, 0.7, false)" }, "0.8")

var scene = new ScrollMagic.Scene({
    triggerElement: "#aboutcontainertop",
})
    .setTween(animateIn).addTo(controller)


animateIn2
    .from("#headingbottom", 0.3, { autoAlpha: 0, y: 30 }, "1.4")
    .from("#parabottom", 0.3, { autoAlpha: 0, y: 30 }, "1")
    .fromTo("#overDivbottom", 0.7, {}, { xPercent: 100, ease: "slow(0.5, 0.7, false)" }, "0")
    .fromTo("#overbottom", 0.7, {}, { xPercent: -100, ease: "slow(0.5, 0.7, false)" }, "0.8")


var scene2 = new ScrollMagic.Scene({
    triggerElement: "#aboutContainerBottom"
})
    .setTween(animateIn2).addTo(controller)

//AOS
AOS.init({
    offset: 250,
    easing: 'ease-in',
    once: true,
});

//Team Section

$('#one').click(function () {
    $('#modal-container').removeAttr('class').addClass('one');
    $('#rahul').css('display', 'block');
    $('#nitesh').css('display', 'none');
    $('#vinay').css('display', 'none');
    $('body').addClass('modal-active');
})

$('#modal-container').click(function () {
    $(this).addClass('out');
    $('body').removeClass('modal-active');
});
$('#two').click(function () {
    $('#modal-container').removeAttr('class').addClass('one');
    $('#nitesh').css('display', 'block');
    $('#rahul').css('display', 'none');
    $('#vinay').css('display', 'none');
    $('body').addClass('modal-active');
})

$('#modal-container').click(function () {
    $(this).addClass('out');
    $('body').removeClass('modal-active');
});
$('#three').click(function () {
    $('#modal-container').removeAttr('class').addClass('one');
    $('#vinay').css('display', 'block');
    $('#rahul').css('display', 'none');
    $('#nitesh').css('display', 'none');
    $('body').addClass('modal-active');
})

$('#modal-container').click(function () {
    $(this).addClass('out');
    $('body').removeClass('modal-active');
});
$('#four').click(function () {
    $('#modal-container-associate').removeAttr('class').addClass('one');
    $('#sakshi').css('display', 'block');
    $('#neha').css('display', 'none');
    $('body').addClass('modal-active');
})

$('#modal-container-associate').click(function () {
    $(this).addClass('out');
    $('body').removeClass('modal-active');
});
$('#five').click(function () {
    $('#modal-container-associate').removeAttr('class').addClass('one');
    $('#neha').css('display', 'block');
    $('#sakshi').css('display', 'none');
    $('body').addClass('modal-active');
})

$('#modal-container-associate').click(function () {
    $(this).addClass('out');
    $('body').removeClass('modal-active');
});


//Dark mode

var checkbox = document.querySelector('input[name=theme]');
console.log("TEST");
checkbox.addEventListener('change', function () {
    if (this.checked) {
        console.log(this);
        trans();
        $('.logo-holder').css({ "display": "none" });
        $('.logo-holder-dark').css({ "display": "inline-flex" });
        $('.services-headings button').removeClass('btn-5').addClass('btn-4');
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        trans();
        $('.logo-holder').css({ "display": "block" });
        $('.logo-holder-dark').css({ "display": "none" });
        $('.services-headings button').removeClass('btn-4').addClass('btn-5');
        document.documentElement.setAttribute('data-theme', 'light');
    }
})

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition');
    }, 1000)
}
