$(document).ready(function() {
  // track generate clicks
  var counter = 0;

  $('#generate-button').on('click', function() {
    counter++;
    generateContainer();
  });

  $('#new-containers').on('click', '.change-color', function() {
    // toggle method would require the .container to have a bg color of yellow in the stylesheet
    // $(this).parent().toggleClass('red');

    // manually handle color swapping
    if($(this).parent().hasClass('red')) {
      console.log('has red!');
      $(this).parent().removeClass('red');
      $(this).parent().addClass('yellow');
    } else {
      $(this).parent().removeClass('yellow');
      $(this).parent().addClass('red');
    }
  });

  // Delete
  $('#new-containers').on('click', '.delete', function() {
    $(this).parent().remove();
    // uncomment next line to include added renumbering feature
    // refreshCounters();
  });

  function refreshCounters() {
    counter = 0;
    // method 1, uses $(this) to access current item in the jQuery array
    // $.each($('.container p'), function(i) {
    //   $(this).text(i + 1);
    // })

    // method 2, also uses $(this)
    $('.container').each(function(i) {
      counter++;
      $(this).children().first().text(counter);

    })

    // method 3, using find() method. Still uses $(this) to access jQuery methods
    // $('#new-containers').find('.container p').each(function(i) {
      //   $(this).text(i + 1);
    // });

  }

  // Adds a new container and its buttons to the DOM
  function generateContainer() {
    $('#new-containers').append('<div class="container yellow"></div>');
    var $el = $('#new-containers').children().last();
    $el.append('<p>' + counter + '</p>');
    $el.append('<button class="change-color">Change Color</button>');
    $el.append('<button class="delete">Delete</button>');
  }

});
