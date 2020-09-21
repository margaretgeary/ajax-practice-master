"use strict";

// Part 1

$('#get-fortune-button').on('click', () => {
  $.get('/fortune', (response) => {
    //
    // This is the body of the callback function for $.get!
    // TODO: use `response` to update the text in `div#fortune-text`
    //
    $('#fortune-text').text(response);
  });
});


// Part 2

$('#weather-form').on('submit', (evt) => {
  evt.preventDefault();

  const formData = {
    // TODO: select the zipcode input
    zipcode: $('#zipcode-field').val()
  };

  $.get('/weather', formData, (response) => {
    $('#weather-info').text(response['forecast']);
  });

});


// Part 3

$("#order-form").on('submit', (evt) => {
  evt.preventDefault();

  // TODO: create an object to store key-value pairs that'll be sent to
  // the server

  // TODO: make a request to /order-melons
  //
  // In the callback function, use the response from the server to
  // update #order-status. IMPORTANT: if the result code is 'ERROR',
  // make it show up in red.

  const formData = {
    qty: $('#qty-field').val(),
    melon_type: $('#melon-type-field').val()
  };


  $.post('/order-melons', formData, (response) => {
    
    if (response.code == 'ERROR') {
      $('#order-status').text(response['msg']).css('color','red');
    } else {
      $('#order-status').text(response['msg']).css('color','');
    }
  });

});