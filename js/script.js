$(document).ready(function () {
	// body...
   wow = new WOW(
                      {
                      boxClass:     'wow',      // default
                      animateClass: 'animated', // default
                      offset:       0,          // default
                      mobile:       true,       // default
                      live:         true        // default
                    }
                    )
                    wow.init();



});

var mixer = mixitup('.gallery');


$('.s-counter').counterUp({
    delay: 10,
    time: 1000
});