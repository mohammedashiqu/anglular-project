$(document).ready(function () {



  $('.hamburger').on('click', function () {
    // alert("DS");
    $('body').toggleClass('menuactive');
    $('.hamburger').toggleClass('active');
  });




  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })







});

