
$( window ).ready(function() {
       
        // scroll reveal
        window.sr = ScrollReveal({
              distance: 0,
              scale: 1,
              duration: 800,
              easing: 'cubic-bezier(0.77, 0, 0.175, 1)',
              mobile: false
              });
                
                if (sr.isSupported()) {
                document.documentElement.classList.add('sr');
                }

        var $scrollReveal = $('.scroll-reveal');

        sr.reveal('.scroll-reveal');

        $.each($scrollReveal, function() {
        sr.reveal(this, $(this).data());
        });

        // push menu
        function openNav() {
            document.getElementById("mySidenav").style.width = "100%";
        }

        function closeNav() {
            document.getElementById("mySidenav").style.width = "0";
        }



        // Scrollie for page background

              $('.slide')
                .scrollie({
                  scrollOffset : -50,
                  scrollingInView : function(elem) {
                             
                    var bgColor = elem.data('background');
                    var color = elem.data('color');
                    
                    $('body').css('background-color', bgColor);
                    $('.fixed-top').css('background-color', bgColor);
                    $('.fixed-bottom').css('background-color', bgColor);
                    $('.underline').css('border-color', bgColor);

                    if(bgColor == '#333298' && color == '#000'){
                        $('.icon').css('color', bgColor)
                        $('.icon').css('border-color', bgColor)
                        $('.icon').css('transition', 'all 1s')
                    }
                   
                    else if(bgColor == '#333298'){
                        $('.icon').css('color', '#fff')
                        $('.icon').css('border-color', '#fff')
                        $('.icon').css('transition', 'all 1s')
                    }

                    else{
                        $('.icon').css('color', bgColor)
                        $('.icon').css('border-color', bgColor)
                        $('.icon').css('transition', 'all 1s')
                    }
                  }
                });

                // foreground parallax
                $(window).enllax();  
                
             //contact form

            var form = $('#main-contact-form');
            form.submit(function(event){
              // event.preventDefault();
              var form_status = $('<div class="form_status"></div>');
              $.ajax({
                    url: $(this).attr('action'),
                        beforeSend: function(){
                      form.prepend( form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn() );
                    }
              }).done(function(data){
                    form_status.html('<p class="text-success">Thank you for contact me. I will reply you as soon as possible.</p>').delay(3000).fadeOut();
              });
            });
          
});