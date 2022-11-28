// Modulální okno (JavaScript)

// var button = document.querySelector('#button');
// var modal = document.querySelector('#modal');
// var close = document.querySelector('#close');

// button.addEventListener('click', function(){
//     modal.classList.add('modal_active');
// });

// close.addEventListener('click', function(){
//     modal.classList.remove('modal_active');
// });


// Modulální okno (jQuery)

$(document).ready(function(){

    // Napojení knihovny wow.js
    new WOW().init();

    var button = $('#button');
    var modal = $('#modal');
    var close = $('#close');

    button.on('click', function(){
        modal.addClass('modal_active');
    });

    close.on('click', function(){
        modal.removeClass('modal_active');
    });

    // Validace formuláře
    $('#offer-form').validate({
      rules: {
        first_name: "required",
        phone: "required",
      },
      messages: {
        first_name: "Uveďte vaše jméno",
        phone: "Uveďte váš telefon",      
      }
    });

    $('#brief-form').validate({
      rules: {
        username: "required",
        phone: "required",
        email: {
          required: true,
          email: true,
        }
      },
      messages: {
        username: "Uveďte vaše jméno",
        email: "Potřebujeme váš email",
        phone: "Uveďte váš telefon",      
      }
    });


    // Napojení slideru
    $('.slider').slick({
        slidesToShow: 3,
        prevArrow: $('.arrows__left'),
        nextArrow: $('.arrows__right'),
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
              }
            }  
        ]
    });
});

