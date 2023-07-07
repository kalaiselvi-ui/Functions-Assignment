

  function printMultiples(N) {
    var multiples = [];
    for (var i = 1; i <= 3; i++) {
      multiples.push(N * i);
    }
    console.log(multiples.join(" "));
  }
    var N = 4;
  printMultiples(N);
  