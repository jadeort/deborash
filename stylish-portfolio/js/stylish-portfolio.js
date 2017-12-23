/*!
 * Mastertech - Stylish Portfolio (http://startbootstrap.com/)
 * Copyright 2013-2017 Mastertech
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
 */

(function($) {
  "use strict"; // Start of use strict

  // Closes the sidebar menu
  $("#menu-close").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
  });

  // Opens the sidebar menu
  $("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
  });

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $("#sidebar-wrapper").removeClass("active");
  });

  //#to-top button appears after scrolling
  var fixed = false;
  $(document).scroll(function() {
    if ($(this).scrollTop() > 250) {
      if (!fixed) {
        fixed = true;
        $('#to-top').show("slow", function() {
          $('#to-top').css({
            position: 'fixed',
            display: 'block'
          });
        });
      }
    } else {
      if (fixed) {
        fixed = false;
        $('#to-top').hide("slow", function() {
          $('#to-top').css({
            display: 'none'
          });
        });
      }
    }
  });

})(jQuery); // End of use strict

// Disable Google Maps scrolling
// See http://stackoverflow.com/a/25904582/1607849
// Disable scroll zooming and bind back the click event
var onMapMouseleaveHandler = function(event) {
  var that = $(this);
  that.on('click', onMapClickHandler);
  that.off('mouseleave', onMapMouseleaveHandler);
  that.find('iframe').css("pointer-events", "none");
}
var onMapClickHandler = function(event) {
  var that = $(this);
  // Disable the click handler until the user leaves the map area
  that.off('click', onMapClickHandler);
  // Enable scrolling zoom
  that.find('iframe').css("pointer-events", "auto");
  // Handle the mouse leave event
  that.on('mouseleave', onMapMouseleaveHandler);
}
// Enable map zooming with mouse scroll when the user clicks the map
$('.map').on('click', onMapClickHandler);

<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
    <meta charset="utf-8">
    <title>Info windows</title>
    <style>
      /* Always set the map height explicitly to define the size of the div
       * element that contains the map. */
      #map {
        height: 100%;
      }
      /* Optional: Makes the sample page fill the window. */
      html, body {
        height: 100%;
        margin: 0;
        padding: 0;
      }
    </style>
  </head>
  <body>
    <div id="map"></div>
    <script>

      // This example displays a marker at the center of Australia.
      // When the user clicks the marker, an info window opens.

      function initMap() {
        var uluru = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });

        var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
            'sandstone rock formation in the southern part of the '+
            'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
            'south west of the nearest large town, Alice Springs; 450&#160;km '+
            '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
            'features of the Uluru - Kata Tjuta National Park. Uluru is '+
            'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
            'Aboriginal people of the area. It has many springs, waterholes, '+
            'rock caves and ancient paintings. Uluru is listed as a World '+
            'Heritage Site.</p>'+
            '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
            'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
            '(last visited June 22, 2009).</p>'+
            '</div>'+
            '</div>';

        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });

        var marker = new google.maps.Marker({
          position: uluru,
          map: map,
          title: 'Uluru (Ayers Rock)'
        });
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
      }
    </script>
    <script async defer
    src="https://maps.googleapis.com/maps//place/Ortega's+Studio+Hair/@-23.5453649,-46.4532905,15z/data=!4m5!3m4!1s0x0:0x35fcb020ef82d8c3!8m2!3d-23.5453649!4d-46.4532905">    </script>  </body> </html>