import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Bike } from './starter.js';

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    let city= $('#description').val();
    function showResults(response){
      for (let i = 0; i < response.bikes.length; i++) {

        $('.showBike').prepend("<li>" +"Stolen Location: " + response.bikes[i].stolen_location + "<br>"+"Manufacture: " + response.bikes[i].manufacturer_name + "<br>"+"serial: " +response.bikes[i].serial + "<br>" + "Title: "+response.bikes[i].title + "<br>" + `<img src="${response.bikes[i].large_img}"/>` + "</li>");
      }
    }
    function error(){
      $('#errors').text("There was an error processing your request. Please try again.");
    }
    $('#description').val("");
    Bike.getData(city, showResults, error);
  });
});
