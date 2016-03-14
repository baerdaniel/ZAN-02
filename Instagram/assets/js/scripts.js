// All custom Javascript


$(document).ready(function(){

      $('#slides').slidesjs({
        effect: {
          slide: {
            // Slide effect settings.
            speed: 1000
          }
        },
        // play: {
        //   active: true,
        //   auto: true,
        //   interval: 4000,
        //   swap: true
        // }
      });

    // var feed = new Instafeed({
    //     user: '207119176',
    //     clientId: '5b7a69037254432084bf6234f779a9a7'
    // });
    // feed.run();

    // var feed = new Instafeed({
    //     get: '207119176',
    //     userId: '5b7a69037254432084bf6234f779a9a7',
    //     filter: function(image) {
    //         return image.tags.indexOf('TAG_NAME') >= 0;
    //     }
    // });
    // feed.run();

    var userFeed = new Instafeed({
        get: 'user',
        userId: '207119176',
        accessToken: '207119176.1677ed0.09fb18e62208402aadf19ec40d3fade2'
    });
    userFeed.run();



    // var userFeed = new Instafeed({
    //     get: 'user',
    //     userId: '207119176',
    //     clientId: '5b7a69037254432084bf6234f779a9a7'
    // });
    // userFeed.run();

});