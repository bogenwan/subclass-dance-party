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

    this._allowToWander = true;

  }

  step() {
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
    if (this._allowToWander) {
      //this.wander();

    }
    this.randomSize();
  }

  wander(distance, velocity) {
    if (distance === undefined) {
      distance = 100;
    }

    if (velocity === undefined) {
      velocity = 3;
    }


    let myHeight = this.$node.height();
    let myWidth = this.$node.width();

    let maxAllowableTop = screen.availHeight - myHeight * 2;
    let maxAllowableLeft = screen.availWidth - myWidth * 2;


    var getRandomInt = function (min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    };

    let myNewTop = getRandomInt(0, maxAllowableLeft);
    let myNewLeft = getRandomInt(0, maxAllowableTop);

    this.$node.css('transition-property', 'top, left');
    this.$node.css('transition-duration', (distance / velocity) + 's');

    this.setPosition(myNewTop, myNewLeft);    

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
    this._originalHeight = this.$node.height();
    this._originalWidth = this.$node.width();
  }

  lineUp(top, left, duration) {
    if (duration === undefined) {
      duration = '1s';
    }

    this._allowToWander = false;

    let myHeight = this.$node.height();
    let myWidth = this.$node.width();

    this.$node.css('transition-property', 'top, left');
    this.$node.css('transition-duration', duration);

    this.setPosition(top - myHeight / 2.0, left - myWidth / 2.0);
  }

  randomSize() {
    var randomSizeNum = function() {
      return Math.random() * 2;
    };
    let randomSizeFactor = randomSizeNum();
    this.$node.height(randomSizeFactor * this._originalHeight);
    this.$node.width(randomSizeFactor * this._originalWidth);
  }

}