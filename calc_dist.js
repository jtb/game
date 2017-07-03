
var correctOrder={1:0x1,2:0x2,3:0x3,4:0x4,5:0x5,6:0x6,7:0x7,8:0x8,9:0x9,10:0xa,11:0xb,12:0xc,13:0xd,14:0xe,15:0xf,16:0x10,17:0x11,18:0x12,19:0x13,20:0x14};

function calcScore() {
    var newNums = new Object();
    var listItems = $("#sortable li");

    listItems.each(function(idx, li) {
            newNums[parseInt($(li).text(), 10)] = idx+1;
	});

    inversions = 0;
    for (i = 1; i <= 20; i++) {
	for(j = i+1;j<=20; j++) {
	    if (newNums[i] > newNums[j] && correctOrder[i] < correctOrder[j]) {
		inversions = inversions + 1;
	    } else if (newNums[i] < newNums[j]&& correctOrder[i] > correctOrder[j]) {
                inversions = inversions + 1;
            }
	}
    }
    var score = 100*(1-inversions/190);
    score = score.toFixed(2);

    document.getElementById("demo").innerHTML = score + "%";

    if (score >= 90) {
      document.getElementById("wisdom").innerHTML = "Wow, you are amazing!";
    } else if (score >= 80) {
      document.getElementById("wisdom").innerHTML = "Great job! You know us well";
    } else if (score >= 70) {
      document.getElementById("wisdom").innerHTML = "Awesome! Enjoy another piece of cake";
    } else if (score >= 60) {
      document.getElementById("wisdom").innerHTML = "Pretty good. Have some wine";
    } else if (score >= 50) {
      document.getElementById("wisdom").innerHTML = "Maybe numbers aren't your thing ;)";
    } else if (score >= 40) {
      document.getElementById("wisdom").innerHTML = "Keep trying! You got this.";
    } else if (score >= 30) {
      document.getElementById("wisdom").innerHTML = "Whew, this is tough!";
    } else if (score >= 20) {
      document.getElementById("wisdom").innerHTML = "You're at the correct wedding, right?";
    } else if (score >= 10) {
      document.getElementById("wisdom").innerHTML = "Did you just guess randomly?";
    } else if (score >= 0) {
      document.getElementById("wisdom").innerHTML = "Remember, earliest first!";
    }
}
