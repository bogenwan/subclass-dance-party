var lineUpDancers = function() {
  let numberOfDancers = window.dancers.length;

  window.dancers.forEach((dancer, i) => {
    let newTopPos = screen.availHeight / 2.0;
    let newLeftPos = (screen.availWidth / numberOfDancers + 1) * (i + 0.5);
    dancer.lineUp(newTopPos, newLeftPos);
  });
};