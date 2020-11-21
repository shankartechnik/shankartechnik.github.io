//variable declaration
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var color = ["", "#72c3dc", "#2b8ead", "#2f454e", "#2b8ead", "#2f454e", "#bfbfbf", "#bfbfbf", "#72c3dc", "#2f454e"]
var shuffleArea = document.getElementById("shuffle-sort-area");

//function to place num buttons in the div according to array sorted or shuffled
function setOptions(buttontype) {
  sessionStorage.setItem("array", JSON.stringify(arr));
  var array = buttontype ? shuffle(JSON.parse(sessionStorage.getItem("array"))) : sort(JSON.parse(sessionStorage.getItem("array")));
  var output = "";
  array.forEach((x) => {
    output += '<button class="rand-btn" style="background:' + color[x] + '"><span style="background:' + color[x] + '; width:5px;">&nbsp;</span>' + x + '</button>';
  });
  shuffleArea.innerHTML = output;
}

//function to shuffle
function shuffle(array) {
  let shuffled = array
    .map((a) => ({
      sort: Math.random(),
      value: a
    }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
  return shuffled;
}

//function to sort

function sort(array) {
  let unshuffled = array.sort(function(a, b) {
    return a - b;
  });
  return unshuffled;
}

//init
setOptions(false);