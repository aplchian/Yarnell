

// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs

// $.fn.extend({
//     animateCss: function (animationName) {
//         var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
//         this.removeClass('hide')
//         this.addClass('animated ' + animationName).one(animationEnd, function() {
//             $(this).removeClass('animated ' + animationName);
//         });
//     }
// });

// $('#yourElement').animateCss('bounce');


$('.m-n-hamburger').click(function(){
  var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
  $('.menu-overlay').addClass('animated fadeIn').one(animationEnd,function(){
    $('.menu-overlay').removeClass('fadeIn')
  })
  $('.menu-overlay').removeClass('hide')
})

$('.menu-overlay-exit').click(function(){
  var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
  $('.menu-overlay').addClass('fadeOut').one(animationEnd,function(){
    $('.menu-overlay').removeClass('fadeOut')
    $('.menu-overlay').addClass('hide')
  })
})



$('#buy-btn').click(function(){
  var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
  $('#purchase-modal').addClass('animated fadeInUp').one(animationEnd,function(){
    $('#purchase-modal').removeClass('fadeInUp')
  })
  $('#purchase-modal').removeClass('hide')
})

$('div#modal-exit').click(function(){
  var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
  $('#purchase-modal').addClass('fadeOutDown').one(animationEnd,function(){
    $('#purchase-modal').removeClass('fadeOutDown')
    $('#purchase-modal').addClass('hide')
  })
})

var waypoints = $('#novel').waypoint(function(direction) {
  $("#fixed-nav").show();
}, {
 offset: '25%'
})

if ($(window).width() >= 900) {

    $('#novel').waypoint(function(direction) {
  if (direction === 'down') {
    $("#desktop-nav").addClass('f');
  }
}, {
  offset: '80%'
})

$('#novel').waypoint(function(direction) {
  if (direction === 'up') {
    $("#desktop-nav").removeClass('f');
  }
}, {
  offset: '80%'
});

$('#insightings-home').waypoint(function(direction) {
if (direction === 'down') {
$("#desktop-nav").addClass('f');
}
}, {
offset: '20%'
})

$('#insightings-home').waypoint(function(direction) {
if (direction === 'up') {
$("#desktop-nav").removeClass('f');
}
}, {
offset: '20%'
});

$('#post-body').waypoint(function(direction) {
if (direction === 'down') {
$("#desktop-nav").addClass('f');
}
}, {
offset: '50%'
})

$('#post-body').waypoint(function(direction) {
if (direction === 'up') {
$("#desktop-nav").removeClass('f');
}
}, {
offset: '50%'
});

}

// if ($(window).width() < 900) {
//
//    $('#novel').waypoint(function(direction) {
//  if (direction === 'down') {
//    $("#mobile-nav-fixed").fadeIn();
//  }
// }, {
//  offset: '80%'
// })
//
// $('#novel').waypoint(function(direction) {
//  if (direction === 'up') {
//    $("#mobile-nav-fixed").fadeOut();
//  }
// }, {
//  offset: '80%'
// });
//
//
//
// }






$('#novel, #hero, #insightings, #bio').waypoint(function(direction) {

    var currentId = $(this.element).attr('id');

    if (direction === "down") {
      console.log(currentId)

        switch(currentId) {
        case "novel":
            $("#novel-nav").addClass("current");
            $("#home-nav, #insightings-nav, #bio-nav").removeClass("current");
            break;
        case "insightings":
            $("#insightings-nav").addClass("current");
            $("#home-nav, #novel-nav, #bio-nav").removeClass("current");
            break;
        case "bio":
            $("#bio-nav").addClass("current");
            $("#home-nav, #novel-nav, #insightings-nav").removeClass("current");
            break;
        }
    }
    }, {
  offset: '20%'
});

$('#novel, #hero-content-contain, #insightings, #bio').waypoint(function(direction) {

    var currentId = $(this.element).attr('id');
    console.log(currentId)

    if (direction === "up") {
        switch(currentId) {
        case "novel":
            $("#novel-nav").addClass("current");
            $("#home-nav, #insightings-nav, #bio-nav").removeClass("current");
            break;
        case "insightings":
            $("#insightings-nav").addClass("current");
            $("#home-nav, #novel-nav, #bio-nav").removeClass("current");
            break;
        case "bio":
            $("#bio-nav").addClass("current");
            $("#home-nav, #novel-nav, #insightings-nav").removeClass("current");
            break;
        case "hero-content-contain":
            $("#home-nav").addClass("current");
            $("#bio-nav, #novel-nav, #insightings-nav").removeClass("current");
            break;
        }
    }
    }, {
  offset: '-100%'
});
