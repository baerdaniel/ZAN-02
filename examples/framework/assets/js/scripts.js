// All custom Javascript


$(document).ready(function(){

      $('#slides').slidesjs({
        callback: {
          loaded: function(number) {
            // Use your browser console to view log
            console.log('SlidesJS: Loaded with slide #' + number);

            // Show start slide in log
            $('#slidesjs-log .slidesjs-slide-number').text(number);
          },
          start: function(number) {
            // Use your browser console to view log
            console.log('SlidesJS: Start Animation on slide #' + number);

          },
          complete: function(number) {
            // Use your browser console to view log
            console.log('SlidesJS: Animation Complete. Current slide is #' + number);

            // Change slide number on animation complete
            $('#slidesjs-log .slidesjs-slide-number').text(number);
          }
        }
      });



});