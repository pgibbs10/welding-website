$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '3011740738',
        limit: 12,
        resolution: 'standard_resolution',
        accessToken: '2908155155.1677ed0.b384248174fd4b6a915a8df2abc63845',
        sortBy: 'most-recent',
        template: '<div class="col-lg-4 gallery instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
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