import 'slick-carousel';
import ScrollReveal from 'scrollreveal';

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
  },
};
