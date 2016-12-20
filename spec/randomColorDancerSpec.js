describe('randomColorDancer', function() {

  var randomColorDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    randomColorDancer = new makeRandomColorDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(randomColorDancer.$node).to.be.an.instanceof(jQuery);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(randomColorDancer, 'step');
      expect(randomColorDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(randomColorDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(randomColorDancer.step.callCount).to.be.equal(2);
    });
  });
  describe('Random Color', function() {
    it('should change color', function() {
      var oldColor = randomColorDancer.$node.css('border-color');
      clock.tick(timeBetweenSteps);
      clock.tick(timeBetweenSteps);
      expect(randomColorDancer.$node.css('border-color') !== oldColor);
    });
  });
});
