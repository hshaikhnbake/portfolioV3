(function($){

    $(document).ready(function () {
        $('.fullpage').fullpage({
            //options here
            autoScrolling: true,
            navigation: true,
            navigationPosition: 'left',
            lazyLoading: false,
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