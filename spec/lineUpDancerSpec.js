describe('blinkyDancer', function() {

  var blinkyDancer, bouncyDancer, randomColorDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new makeBlinkyDancer(10, 20, timeBetweenSteps);
    bouncyDancer = new makeBouncyDancer(10, 20, timeBetweenSteps);
    randomColorDancer = new makeRandomColorDancer(10, 20, timeBetweenSteps);
    window.dancers = [blinkyDancer, bouncyDancer, randomColorDancer];
  });

  it('should call all dancer\'s lineUp method', function() {
    sinon.spy(blinkyDancer, 'lineUp');
    simon.spy(bouncyDancer, 'lineUp');
    simon.spy(randomColorDancer, 'lineUp');
    lineUpDancers();

    expect(blinkyDancer.lineUp.called).to.be.true;
    expect(bouncyDancer.lineUp.called).to.be.true;
    expect(randomColorDancer.lineUp.called).to.be.true;
  });
});
