import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// Jquery
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
  // Function to manage slider
var slideIndex = 0;
showSlides(slideIndex);

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides, 7000);
}

// Function to manage active class for menu items
  $("#mainNav li a").on("click", function(e) {
    e.preventDefault();
    $("#mainNav li a").removeClass("activemenu");
    $(this).addClass("activemenu");
  });
  $("#logo").on("click", function(e) {
    e.preventDefault();
    $("#mainNav li a").removeClass("activemenu");
  });

// Smooth scroll for menu anchors
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    event.preventDefault();
  // On-page links
    // Figure out element to scroll to
  var target = $(this.hash);
  var navHeight = $('#mainNav').height();
  var scrollToPosition = target.offset().top;
  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: scrollToPosition
      }, 1500, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
      });
    }
});

// Smooth scroll on 'what' section button
$("#btndown").click(function() {
  $('html,body').animate({
    scrollTop: $("#root").offset().top},
    2000);
});