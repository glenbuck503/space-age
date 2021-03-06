import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Person from './js/space.js';


$(document).ready(function() {
  $('#mercury').submit(function(event) {
    event.preventDefault();
    $(".output").show();
    const userName = $("#inputName").val();
    const userAge = $("#inputAge").val();
    const person = new Person(userName, userAge);
    const result = person.showDisplay();
    $(".output").html("Hi" + " " + userName + "! " + result);
  });

  $('#venus').submit(function(event) {
    event.preventDefault();
    $(".output").show();
    const userName = $("#inputName").val();
    const userAge = $("#inputAge").val();
    const person = new Person(userName, userAge);
    const result = person.showDisplayVenus();
    $(".output").html("Hi" + " " + userName + "! " + result);
  });

  $('#mars').submit(function(event) {
    event.preventDefault();
    $(".output").show();
    const userName = $("#inputName").val();
    const userAge = $("#inputAge").val();
    const person = new Person(userName, userAge);
    const result = person.showDisplayMars();
    $(".output").html("Hi" + " " + userName + "! " + result);
  });

  $('#jupiter').submit(function(event) {
    event.preventDefault();
    $(".output").show();
    const userName = $("#inputName").val();
    const userAge = $("#inputAge").val();
    const person = new Person(userName, userAge);
    const result = person.showDisplayJupiter();
    $(".output").html("Hi" + " " + userName + "! " + result);
  });
});