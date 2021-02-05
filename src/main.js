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
    
  });
});