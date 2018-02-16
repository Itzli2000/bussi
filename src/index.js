import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// Moment
import * as moment from 'moment';
import 'moment/locale/es';
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


const { Component } = React;
const { render } = ReactDOM;

class jsonData extends Component {

  constructor(){
    super();
    this.state = {
      data: []
    };
  };

  componentDidMount() {
    fetch("data.json")
    .then( (response) => {
      return response.json() })   
    .then( (json) => {
      this.setState({data: json});
    });
  };

  componentDidUpdate() {
    function animation(json) {
      return json.map( (data) => {
        var m = moment.unix((parseInt(data.startDate)));
        var s = m.format("M/D/YYYY");
        var sr = m.format("H:mm");
        var newhour = tConvert (sr);
        function tConvert (time) {
          time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

          if (time.length > 1) {
            time = time.slice (1);
            time[5] = +time[0] < 12 ? ' AM':' PM';
            time[0] = +time[0] % 12 || 12;
          }
          return time.join ('');
        }
        var end = moment.unix((parseInt(data.endDate)));
        var send = end.format("M/D/YYYY");
        var srend = end.format("H:mm");
        var lasthour = tConvert (srend);
        function tConvert (time) {
          time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

          if (time.length > 1) {
            time = time.slice (1);
            time[5] = +time[0] < 12 ? ' AM' : ' PM';
            time[0] = +time[0] % 12 || 12;
          }
          return time.join ('');
        }
        return(`
          `);
      });
    };
        // this.setState({animation: animation(this.state.data)}); //causes infinite loop
        // this.animation = animation(this.state.data);
      };

      render() {
        var canvases = this.state.data.map( (data, index) => {
          var m = moment.unix((parseInt(data.startDate)));
          var s = m.format("M/D/YYYY");
          var sr = m.format("H:mm");
          var newhour = tConvert (sr);
          function tConvert (time) {
            time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

            if (time.length > 1) {
              time = time.slice (1);
              time[5] = +time[0] < 12 ? ' AM':' PM';
              time[0] = +time[0] % 12 || 12;
            }
            return time.join ('');
          }
          var end = moment.unix((parseInt(data.endDate)));
          var send = end.format("M/D/YYYY");
          var srend = end.format("H:mm");
          var lasthour = tConvert (srend);
          function tConvert (time) {
            time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

            if (time.length > 1) {
              time = time.slice (1);
              time[5] = +time[0] < 12 ? ' AM' : ' PM';
              time[0] = +time[0] % 12 || 12;
            }
            return time.join ('');
          }
          console.log(data);
          return (
            <div class="card card--container">
            <div class="row">
            <div class="col-6 d-flex flex-column justify-content-center align-items-center card__ticket">
            <div class="">${data.ticket}</div>
            </div>
            <div class="col-6 d-flex flex-column justify-content-center align-items-center card__title">
            <h1 class="">${data.full_name}</h1>
            </div>
            </div>
            <div class="row">
            <div class="col-6 d-flex flex-column justify-content-center align-items-center firstdate">
            <div class="card__hour">${newhour}</div>
            <div class="card__date">${s}</div>
            </div>
            <div class="col-6 d-flex flex-column justify-content-center align-items-center firstaddress">
            <h3 class="card__start">${data.startPlaceName}</h3>
            <p class="card__startaddress">${data.startPlaceAddress}</p>
            </div>
            </div>
            <div class="row">
            <div class="col-6 d-flex flex-column justify-content-center align-items-center lastdate">
            <div class="card__endhour">${lasthour}</div>
            <div class="card__enddate">${send}</div>
            </div>
            <div class="col-6 d-flex flex-column justify-content-center align-items-center lastaddress">
            <h5 class="card__endaddressName">${data.endPlaceName}</h5>
            <p class="card__endaddressPlace">${data.endPlaceAddress}</p>
            </div>
            </div>
            </div>
            );
        });
        return(
          React.createElement('div', null, ...canvases)
          );
      };

    };

    
    render(
      React.createElement(jsonData, null),
      document.getElementById('messages2')
      );