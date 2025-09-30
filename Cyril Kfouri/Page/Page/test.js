$(document).ready(function () {
    var timeout;
    $('ul.dynamic').attr('id','demo')
    $('li.static.dynamic-children').on('mouseenter', function () {
        clearTimeout(timeout); // Clear any previous timeout
        $('header').addClass('white-bg');
        $('.mega-menu', this).addClass('show');
            $("ul.dynamic").mouseleave(function(e)
            {
                var subject = $(".mega-menu"); 
                if(e.target.id != subject.attr('class'))
                {
                    $(".mega-menu".removeClass('show'))		        }
            });
    });

    $('li.static.dynamic-children').on('mouseleave', function () {
        // Set a timeout to remove the 'show' class after a delay
            $('header').removeClass('white-bg');
            $('.mega-menu').removeClass('show');
                   });        
    });   