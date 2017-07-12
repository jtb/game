
//var correctOrder={1:0x1,2:0x2,3:0x3,4:0x4,5:0x5,6:0x6,7:0x7,8:0x8,9:0x9,10:0xa,11:0xb,12:0xc,13:0xd,14:0xe,15:0xf,16:0x10,17:0x11,18:0x12,19:0x13,20:0x14};

var correctOrder={15:1,2:2,25:3,24:4,6:5,7:6,4:7,21:8,17:9,23:10,3:11,19:12,16:13,10:14,18:15,13:16,11:17,22:18,9:19,26:20,27:21,14:22,8:23,1:24,5:25,12:26,20:27};

function myFunction() {
    var x = document.getElementById('alist');
    var y = document.getElementById('wisdom');
    //var y = document.getElementById('alist2');
    if (x.style.display === 'none') {
        x.style.display = 'block';
        y.style.display = 'none';
	//y.style.display = 'block';
	
	document.getElementById("buttonid").innerHTML = "Score it!";
    } else {
        x.style.display = 'none';
        y.style.display = 'block';
	//document.getElementById("buttonid").innerHTML = "Try again!";
    }
}

function calcScore() {
    var newNums = new Object();

    var listItems = $("#sortable li");
    listItems.each(function(idx, li) {
            newNums[parseInt($(li).text(), 10)] = idx + 1;
	});

    //var listItems2 = $("#sortable2 li").not(".unsortable");
    //listItems2.each(function(idx, li) {
    //        newNums[parseInt($(li).text(), 10)] = idx + 1 + listItems.length;
    //});

    inversions = 0;
    for (i = 1; i <= 27; i++) {
	for(j = i+1;j<=27; j++) {
	    if (newNums[i] > newNums[j] && correctOrder[i] < correctOrder[j]) {
		inversions = inversions + 1;
	    } else if (newNums[i] < newNums[j]&& correctOrder[i] > correctOrder[j]) {
                inversions = inversions + 1;
            }
	}
    }
    var score = 100*(1-inversions/351);
    score = score.toFixed(2);

    document.getElementById("demo").innerHTML = score + "%";

    if (score >=100) {
      document.getElementById("wisdomt").innerHTML = "WINNER!! You rock";
    } else if (score >= 90) {
      document.getElementById("wisdomt").innerHTML = "Great job. You know us very well!";
    } else if (score >= 80) {
      document.getElementById("wisdomt").innerHTML = "That deserves another piece of cake";
    } else if (score >= 70) {
      document.getElementById("wisdomt").innerHTML = "Awesome! You almost got it";
    } else if (score >= 60) {
      document.getElementById("wisdomt").innerHTML = "Keep at it. You can do it!";
    } else if (score >= 50) {
      document.getElementById("wisdomt").innerHTML = "Not half bad.";
    } else if (score >= 40) {
      document.getElementById("wisdomt").innerHTML = "Are you just guessing randomly?";
    } else if (score >= 30) {
      document.getElementById("wisdomt").innerHTML = "You know the bride and groom ,right?";
    } else if (score >= 20) {
      document.getElementById("wisdomt").innerHTML = "Mmm, maybe try with your eyes open";
    } else if (score >= 10) {
      document.getElementById("wisdomt").innerHTML = "LOL, really?";
    } else if (score >= 0) {
      document.getElementById("wisdomt").innerHTML = "Remember, earliest first!";
    }

    myFunction();
}

