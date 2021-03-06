$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      screen.availHeight * 0.7,
      // $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      1000
    );

    $('body').append(dancer.$node);

    $('.dancer').on('mouseover', function() {

      if (Math.random() > 0.5) {
        $(this).css('transform', 'translateX(-200px)');
      } else {
        $(this).css('transform', 'translateX(200px)');       
      }
    });

    window.dancers.push(dancer);
  });


  $('.danceFloorActionButton').on('click', function(event) {
    var dancerActionFunctionName = $(this).data('dance-action-function-name');

    var dancerActionFunction = window[dancerActionFunctionName];

    dancerActionFunction();

  });
});

