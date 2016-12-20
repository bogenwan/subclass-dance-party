// // Creates and returns a new dancer object that can step
// var makeDancer = function(top, left, timeBetweenSteps) {

//   var dancer = {};

//   // use jQuery to create an HTML <span> tag
//   dancer.$node = $('<span class="dancer"></span>');

//   dancer.step = function() {
//     // the basic dancer doesn't do anything interesting at all on each step,
//     // it just schedules the next step
//     setTimeout(dancer.step, timeBetweenSteps);
//   };
//   dancer.step();

//   dancer.setPosition = function(top, left) {
//     // Use css top and left properties to position our <span> tag
//     // where it belongs on the page. See http://api.jquery.com/css/
//     //
//     var styleSettings = {
//       top: top,
//       left: left
//     };
//     dancer.$node.css(styleSettings);
//   };

//   // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
//   // this one sets the position to some random default point within the body
//   dancer.setPosition(top, left);

//   return dancer;
// };

class makeDancer {
  constructor(top, left, timeBetweenSteps) {

    this.timeBetweenSteps = timeBetweenSteps;

    // use jQuery to create an HTML <span> tag
    this.$node = $('<span class="dancer"></span>');
    this.step();

    // this one sets the position to some random default point within the body    
    this.setPosition(top, left);    

    this._setAsRandomImage();

  }

  step() {
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  }

  setPosition(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  }

  _setAsRandomImage() {
    let listOfDancerSprite = [];
    listOfDancerSprite.push('./img/cacodemon.gif');
    listOfDancerSprite.push('./img/cyberdemon.gif');
    listOfDancerSprite.push('./img/doomGuy.gif');
    listOfDancerSprite.push('./img/imp.gif');
    listOfDancerSprite.push('./img/mancubus.gif');
    listOfDancerSprite.push('./img/revenant.gif');
    listOfDancerSprite.push('./img/spidermastermind.gif');
    listOfDancerSprite.push('./img/wolfensteinSS.gif');

    var randomImageNum = function() {
      return Math.floor(Math.random() * listOfDancerSprite.length);
    };

    this.setAsImage(listOfDancerSprite[randomImageNum()]); 
  }

  setAsImage(imageURL) {
    //this.$node.css('background-image', 'url("' + imageURL + '")');
    this.$node.css('border-style', 'none');
    this.$node.html('<img src="' + imageURL + '" />');

  }

  lineUp(top, left) {
    let myHeight = this.$node.height();
    let myWidth = this.$node.width();

    this.setPosition(top - myHeight / 2.0, left - myWidth / 2.0);
  }
}