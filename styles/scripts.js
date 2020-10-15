(function($){

    $(document).ready(function () {
        $('body').append('<div class="loader-wrapper"><span class="loader"><span class="loader-inner"></span></span></div>');
        $(window).on('load', function () {
            setTimeout(removeLoader, 1000); //wait for page load PLUS two seconds.
        });
        function removeLoader() {
            $(".loader-wrapper").fadeOut(500, function () {
                // fadeOut complete. Remove the loading div
                $(".loader-wrapper").remove(); //makes page more lightweight 
            });
        }


        $('.fullpage').fullpage({
            //options here
            autoScrolling: true,
            navigation: true,
            navigationPosition: 'left',
            lazyLoading: true,
        });
        $('.close-button').click(function(){
            const checkbox = $('#toggle');
            checkbox.prop('checked', !checkbox.prop("checked"));
        })
        $('.nav-link').hover(function () {
            $(this).css("color", "white")
            $('.nav-link:not(:hover)').css('color', 'grey')
        }, function () {
            $(this).css("color", "white");
            $('.nav-link:not(:hover)').css('color', 'white')
        }); 

        let start = null; //global

        $(window).on('touchstart', function (e) {
            start = e.changedTouches[0];
        });

        $(window).on('touchend', function (e) {
            let end = e.changedTouches[0];

            if (end.screenX - start.screenX > 0) {
                fullpage_api.moveSectionUp();
            }
            else if (end.screenX - start.screenX < 0) {
                fullpage_api.moveSectionDown();
            }
        });

    });

})(jQuery)