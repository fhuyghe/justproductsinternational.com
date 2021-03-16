import 'slick-carousel';
import ScrollReveal from 'scrollreveal';
import ScrollMagic from 'scrollmagic'

export default {
  init() {
    // JavaScript to be fired on the home page

    checkScroll();
    $(window).on('scroll', function () {
      checkScroll();
    });

    function checkScroll() { 
      if ($(window).scrollTop() > 100) {
        $('.banner').addClass('scrolled');
      } else { 
        $('.banner').removeClass('scrolled');
      }
    }

    // Cutting intro string into chunks
    var introTextSplit = $('#intro h3').text().split('.');
    console.log(introTextSplit);
    let $newText = '';
    introTextSplit.forEach(string => {
      if (string) { 
        $newText += '<span>' + string + '.</span>';
      }
    });
    $('#intro h3').html($newText);

    //Mobile menu
    $('.hamburger').on('click', function () {
      $('.hamburger').toggleClass('is-active');
      $('.menu').toggleClass('active');
    });
    
    $('.nav a').on('click', function () { 
      $('.hamburger').removeClass('is-active');
      $('.menu').removeClass('active');
    })

    //FAQ
    $('.question').on('click', function (e) { 
      let $question = $(e.target).parents('.question-wrap');
      if ($question.hasClass('active')) {
        $('.question-wrap').removeClass('active');
      } else { 
        $('.question-wrap').removeClass('active');
        $question.addClass('active');
      }
    })

    //Slick
    $('.all-products').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      mobileFirst: true,
      arrows: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            centerMode: false,
          },
        },
      ],
    });
    
    $('.testimonials').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      mobileFirst: true,
      arrows: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            centerMode: false,
          },
        },
      ],
    });
    
    $('.steps').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      mobileFirst: true,
      dots: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: 'unslick',
        },
      ],
    });

  },
  finalize() {
    // JavaScript to be fired on the home page, after the init JS
    ScrollReveal({ reset: true });

    var slideUp = {
      distance: '150%',
      origin: 'bottom',
      opacity: 0,
    };
    
    ScrollReveal().reveal('h2', slideUp);

    // Revealed elements
    function revealAddClass(el) {
      el.classList.add('revealed');
    }

    var revealClass = {
      distance: 0,
      opacity: null,
      afterReveal: revealAddClass,
    }
    
    ScrollReveal().reveal('.reveal', revealClass);

    // Scrollmagic
    // init controller
    var controller = new ScrollMagic.Controller();

    // create a scene
    if (window.innerWidth > 770) {
      new ScrollMagic.Scene({
        duration: 600, // the scene should last for a scroll distance of 100px
        triggerElement: '#menardInfo',
      })
        .setPin('#menardInfo') // pins the element for the the scene's duration
        .addTo(controller); // assign the scene to the controller
      
    var revealElements = document.getElementsByClassName('stacked-image');
    for (var i=0; i<revealElements.length; i++) { // create a scene for each element
      new ScrollMagic.Scene({
                triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
                offset: 50 * i + 50,												 // start a little later
                triggerHook: 0.9,
              })
              .setClassToggle(revealElements[i], 'visible') // add class toggle
              .addTo(controller);
        }
    }

  },
};
