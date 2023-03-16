// set initial state of game X = 1, O = 0
let gameState = 0;

//individual cell ids into consts
const a1 = document.querySelector("#a1");
const a2 = document.getElementById("a2");
// const a3 = document.getElementById("a3");
// const b1 = document.getElementById("b1");
// const b2 = document.getElementById("b2");
// const b3 = document.getElementById("b3");
// const c1 = document.getElementById("c1");
// const c2 = document.getElementById("c2");
// const c3 = document.getElementById("c3");

//addEventListeners
a1.addEventListener("click", setGameMarker);
a2.addEventListener("click", setGameMarker);
a3.addEventListener("click", setGameMarker);
b1.addEventListener("click", setGameMarker);
b2.addEventListener("click", setGameMarker);
b3.addEventListener("click", setGameMarker);
c1.addEventListener("click", setGameMarker);
c2.addEventListener("click", setGameMarker);
c3.addEventListener("click", setGameMarker);

function xTurn() {
  // this.innerHTML = "X";
  // gameState--;
}

function oTurn() {
  // this.innerHTML = "O";
  // gameState++;
}

function setGameMarker() {
  //   if (gameState === 1){
  //       oTurn();
  //   }
  //   else xTurn();
  if (gameState == 0 && this.innerHTML == false) {
    this.innerHTML = "O";
    gameState++;
    console.log(gameState);
  } else if (gameState == 1 && this.innerHTML == false) {
    this.innerHTML = "X";
    gameState--;
    console.log(gameState);
    winConditions();
  }
}

console.log(a1.innerHTML);
console.log(a2.innerHTML);

function winConditions() {
  if (a1.innerHTML === a2.innerHTML && a2.innerHTML == a3.innerHTML) {
    console.log("You win");
  }
}
