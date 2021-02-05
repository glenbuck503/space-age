import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Person from './js/space.js';


$(document).ready(function() {
  $('#user').submit(function(event) {
    event.preventDefault();
    const userName = $("#inputName").val();
    const userAge = $("#inputAge").val();
    const person = new Person(userName, userAge);

    const result = person.showDisplay();
    const age = person.mercuryAge();


    $(".output").html(result);

    
  });

  $('#venus').submit(function(event) {
    event.preventDefault();
    const userName = $("#inputName").val();
    const userAge = $("#inputAge").val();
    const person = new Person(userName, userAge);
    const result = person.showDisplayVenus();
  
    $(".output").html(result);
    
  });
  $('#mars').submit(function(event) {
    event.preventDefault();
    const userName = $("#inputName").val();
    const userAge = $("#inputAge").val();
    const person = new Person(userName, userAge);
    const result = person.showDisplayMars();

    $(".output").html(result);
    
  });

  $('#jupiter').submit(function(event) {
    event.preventDefault();
    const userName = $("#inputName").val();
    const userAge = $("#inputAge").val();
    const person = new Person(userName, userAge);
    const result = person.showDisplayJupiter();


    $(".output").html(result);
    
    
  });
});