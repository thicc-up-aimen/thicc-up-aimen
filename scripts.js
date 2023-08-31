var aimenWeight = 0;
document.getElementById("aimen-weight").innerHTML = aimenWeight + " lbs";
document.getElementById("boyz").innerHTML = "<h1>BOYZ!</h1><h4>Our sexy little twink is getting too twinky and needs our help</h4><h4>Feed him some weed brownies and let nature thicc him up</h4>";

function feedAimen() {
    aimenWeight = aimenWeight + 1;
    document.getElementById("aimen-weight").textContent = aimenWeight + " lbs";
    if (aimenWeight === 100) {
        document.getElementById("sexy-little-twink").src = "./assets/sexy-thicc-boy.png";
        document.getElementById("boyz").innerHTML = "<h1>SUCCESS!!!!!!</h1><h4>Our little twink has grown up to a thicc boy</h4><h4>Now it's gooning time</h4>";
        party.confetti(document.querySelector('.sexy-little-twink'), {
            count: party.variation.range(50, 100),
          });
        
          setInterval(() => {
            party.confetti(document.querySelector('.sexy-little-twink'), {
              count: party.variation.range(50, 100),
            });
          }, 3000)

    } else if (aimenWeight % 10 === 0 && aimenWeight < 100){
        document.getElementById("sexy-little-twink").src = "./assets/sexy-little-twink-" + aimenWeight + ".png";
    }
}