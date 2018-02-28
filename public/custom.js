$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '3011740738',
        limit: 12,
        resolution: 'standard_resolution',
        accessToken: '3011740738.1677ed0.ab1f22b381454ec59862c4ed168c13c2',
        sortBy: 'most-recent',
        template: '<div class="col-lg-4 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();

    
    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });


});