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


// Component to show json data
const { Component } = React;
const { render } = ReactDOM;

class jsonData extends Component {
  // Constructor
  constructor(){
    super();
    this.state = {
      data: []
    };
  };
  // Get data from json file
  componentDidMount() {
    fetch("data.json")
    .then( (response) => {
      return response.json() })   
    .then( (json) => {
      this.setState({data: json});
    });
  };
  // Render heach json object to container
  render() {
    var canvases = this.state.data.map( (data, index) => {
      var m = moment.unix((parseInt(data.startDate)));
      var s = m.format("M/D/YYYY");
      var newhour = m.format("H:mm A");
      var end = moment.unix((parseInt(data.endDate)));
      var send = end.format("M/D/YYYY");
      var lasthour = end.format("h:mm A");
      return (
        <div className="card card--container">
        <div className="row">
        <div className="col-6 d-flex flex-column justify-content-center align-items-center card__ticket">
        <div className="">{data.ticket}</div>
        </div>
        <div className="col-6 d-flex flex-column justify-content-center align-items-center card__title">
        <h1 className="">{data.full_name}</h1>
        </div>
        </div>
        <div className="row">
        <div className="col-6 d-flex flex-column justify-content-center align-items-center firstdate">
        <div className="card__hour">{newhour}</div>
        <div className="card__date">{s}</div>
        </div>
        <div className="col-6 d-flex flex-column justify-content-center align-items-center firstaddress">
        <h3 className="card__start">{data.startPlaceName}</h3>
        <p className="card__startaddress">{data.startPlaceAddress}</p>
        </div>
        </div>
        <div className="row">
        <div className="col-6 d-flex flex-column justify-content-center align-items-center lastdate">
        <div className="card__endhour">{lasthour}</div>
        <div className="card__enddate">{send}</div>
        </div>
        <div className="col-6 d-flex flex-column justify-content-center align-items-center lastaddress">
        <h5 className="card__endaddressName">{data.endPlaceName}</h5>
        <p className="card__endaddressPlace">{data.endPlaceAddress}</p>
        </div>
        </div>
        </div>
        );
    });
    // Create div where html will be render
    return(
      React.createElement('div', null, ...canvases)
      );
  };

};

// Parse data to DOM
render(
  React.createElement(jsonData, null),
  document.getElementById('messagesContainer')
  );

// Jquery use for frontend control
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
// $("#btndown").click(function() {
//   $('html,body').animate({
//     scrollTop: $("#root").offset().top},
//     2000);
// });