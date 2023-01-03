// creating global variable for player

// let consider default player1 is 'X' and player 2 is '0'
let currentPlayer = "X";

// representing grid div's in terms of arr and fill all the indexes with NULL
let arr = Array(9).fill(null); // arr help to check the winner by following some patterns
// console.log(arr); // displaying arrS

// el -> element get by this in onclick event
function handleClick(el) {
  // console.log(el); get the div by clicking on it

  // to check on which id of div user clicks
  const id = Number(el.id); // Number(..) -> convert content into a number
  // console.log(id); // check working

  // click on div of id update it's arr[id] value to CurrentPlayer (X | 0)
  arr[id] = currentPlayer;
  // console.log(arr) // check arr updating or not

  //   now add the X and 0 in div on clicking it
  el.innerHTML = currentPlayer;

  // play sounds on win
  let soundUrl = "click.mp3";
  new Audio(soundUrl).play();

  // check if someOne wins or Not
  // check the conditions
  checkWinner();

  // Now change the player1 to player2
  // if 'X' then '0' or vise-versa  using conditional statement
  currentPlayer = currentPlayer === "X" ? "0" : "X";
  //   console.log(currentPlayer); // check working
}

// creating the function to check winner

// there are following combination used to check the winner

// // for row
// 0 1 2
// 3 4 5
// 6 7 8
// // for col
// 0 3 6
// 1 4 7
// 2 5 8
// // for diagonal
// 0 4 8
// 2 4 6

function checkWinner() {
  if (
    // initially the array is null so everything is equal so to handle it we add null check condition
    (arr[0] != null && arr[0] == arr[1] && arr[1] == arr[2]) ||
    (arr[3] != null && arr[3] == arr[4] && arr[4] == arr[5]) ||
    (arr[6] != null && arr[6] == arr[7] && arr[7] == arr[8]) ||
    (arr[0] != null && arr[0] == arr[3] && arr[3] == arr[6]) ||
    (arr[1] != null && arr[1] == arr[4] && arr[4] == arr[7]) ||
    (arr[2] != null && arr[2] == arr[5] && arr[5] == arr[8]) ||
    (arr[0] != null && arr[0] == arr[4] && arr[4] == arr[8]) ||
    (arr[2] != null && arr[2] == arr[4] && arr[4] == arr[6])
  ) {
    // console.log(currentPlayer, "wins");

    // giving output on screen
    // document.write(`Winner is ${currentPlayer}`);

    // show popup
    openPopup();
  }
}

// popup

var popup = document.querySelector(".popup");
var winner = document.querySelector("b");

// opening popUp if winner found
function openPopup() {
  let blur = document.querySelector(".container-game");
  popup.classList.add("open-popup");
  winner.innerText += `${currentPlayer}`;

  // to get background blur
  blur.style.filter = "blur(5px)";

  // play sounds on win
  let url = "success.mp3";
  new Audio(url).play();
}
function closePopup() {
  popup.classList.remove("open-popup");
  //   reloading the page
  location.reload();
}

let newGame = document.getElementById("newGame");

newGame.addEventListener("click", function () {
  location.reload();
});
