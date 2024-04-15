let click=true;
let color="black";

function createBoard(size) {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    board.style.gridTemplateRows = `repeat(${size} , 1fr)`;
  
    let amount = size * size;
    for (let i = 0; i < amount; i++) {
      let square = document.createElement("div");
      square.addEventListener("mouseover", colorSquare);
      square.style.backgroundColor = "white";
      board.insertAdjacentElement("beforeend", square);
    }
  }
  
  function changecolor(choice) {
    color = choice;
  }
  function colorSquare() {
    if (click) {
      if (color === "random") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
      } else {
        this.style.backgroundColor = color;
      }
    }
  }
  createBoard(16);
function changesize(){
  let size=document.querySelector("#popup");
  return size;
}
  
  function resetboard() {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => {div.style.backgroundColor="White"});
  }

