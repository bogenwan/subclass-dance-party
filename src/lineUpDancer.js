var lineUpDancers = function() {
  let numberOfDancers = window.dancers.length;

  window.dancers.forEach((dancer, i) => {
    let newTopPos = screen.availHeight / 2.0;
    let newLeftPos = (screen.availWidth / numberOfDancers + 1) * (i + 1);
    dancer.lineUp(newTopPos, newLeftPos);
  });
};