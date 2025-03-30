console.log("Welcome to Tic Tac Toe");

let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
let isgameover = false;

const changeTurn = () => turn === "X" ? "O" : "X";

const checkWin = () => {
  let boxtext = document.getElementsByClassName('boxtext');
  let wins = [
    [0, 1, 2, 0, 5, 0],
    [3, 4, 5, 0, 15, 0],
    [6, 7, 8, 0, 25, 0],
    [0, 3, 6, -10, 15, 90],
    [1, 4, 7, 0, 15, 90],
    [2, 5, 8, 10, 15, 90],
    [0, 4, 8, 0, 15, 45],
    [2, 4, 6, 0, 15, 135]
  ];

  wins.forEach(e => {
    if (boxtext[e[0]].innerText !== "" &&
        boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
        boxtext[e[1]].innerText === boxtext[e[2]].innerText) {
      document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won!";
      isgameover = true;
      document.querySelector('.imgbox img').style.width = "200px";
      const line = document.querySelector('.line');
      line.style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
      line.style.width = "30vw";
    }
  });
};

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
  let boxtext = element.querySelector('.boxtext');
  element.addEventListener('click', () => {
    if (boxtext.innerText === '' && !isgameover) {
      boxtext.innerText = turn;
      audioTurn.play();
      checkWin();
      if (!isgameover) {
        turn = changeTurn();
        document.querySelector(".info").innerText = "Turn for " + turn;
      }
    }
  });
});

document.getElementById("reset").addEventListener('click', () => {
  let boxtexts = document.querySelectorAll('.boxtext');
  boxtexts.forEach(element => element.innerText = "");
  turn = "X";
  isgameover = false;
  document.querySelector(".line").style.width = "0vw";
  document.querySelector(".info").innerText = "Turn for " + turn;
  document.querySelector('.imgbox img').style.width = "0px";
});
