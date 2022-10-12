(function($){

    $(document).ready(function () {

        $('.close-button').click(function(){
            const checkbox = $('#toggle');
            checkbox.prop('checked', !checkbox.prop("checked"));
        })

        $('.link-animate').hover(function () {
            $(this).css("color", "white")
            $('.link-animate:not(:hover)').css('color', 'grey')
        }, function () {
            $(this).css("color", "white");
            $('.link-animate:not(:hover)').css('color', 'white')
        });

        $('body').append('<div class="loader-wrapper"><span class="loader"><span class="loader-inner"></span></span></div>');

        $(window).on('load', function () {
            $('.loader-wrapper').show()
            setTimeout(removeLoader, 1000); 
        });
        function removeLoader() {
            $(".loader-wrapper").fadeOut(500, function () {
                // fadeOut complete. Remove the loading div
                $(".loader-wrapper").hide(); //makes page more lightweight 
            });
        }

    });


   

})(jQuery)