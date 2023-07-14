const main = document.getElementById("main-div");
const details = document.getElementById("details");
const score1 = document.getElementById("score1");
const score2 = document.getElementById("score2");
main.style.display = "none";

const start = document.getElementById("start");
start.addEventListener("click", () => {
  main.style.display = "";
  details.style.display = "none";
  const player1_input = document.getElementById("player1-name");
  const player2_input = document.getElementById("player2-name");
  const player1 = document.getElementById("player1");
  const player2 = document.getElementById("player2");
  player1.innerText = player1_input.value;
  player2.innerText = player2_input.value;
});

const cell_1 = document.getElementById("c1");
const cell_2 = document.getElementById("c2");
const cell_3 = document.getElementById("c3");
const cell_4 = document.getElementById("c4");
const cell_5 = document.getElementById("c5");
const cell_6 = document.getElementById("c6");
const cell_7 = document.getElementById("c7");
const cell_8 = document.getElementById("c8");
const cell_9 = document.getElementById("c9");

player_ones_turn = true;

cells = [
  cell_1,
  cell_2,
  cell_3,
  cell_4,
  cell_5,
  cell_6,
  cell_7,
  cell_8,
  cell_9,
];

for (let i = 0; i < 9; i++) {
  cells[i].addEventListener("click", () => {
    if (player_ones_turn) {
      cells[i].innerText = "X";
      player_ones_turn = false;
    } else {
      cells[i].innerText = "O";
      player_ones_turn = true;
    }
    checkForWinner();
  });
}

function checkForWinner() {
  if (
    cell_1.innerText == "X" &&
    cell_2.innerText == "X" &&
    cell_3.innerText == "X"
  ) {
    document.getElementById("status").innerHTML = "Player X won";
    cell_4.disabled = true;
    cell_5.disabled = true;
    cell_6.disabled = true;
    cell_7.disabled = true;
    cell_8.disabled = true;
    cell_9.disabled = true;

    cell_1.style.color = "red";
    cell_2.style.color = "red";
    cell_3.style.color = "red";
  } else if (
    cell_1.innerText == "X" &&
    cell_4.innerText == "X" &&
    cell_7.innerText == "X"
  ) {
    document.getElementById("status").innerHTML = "Player X won";
    cell_2.disabled = true;
    cell_3.disabled = true;
    cell_5.disabled = true;
    cell_6.disabled = true;
    cell_8.disabled = true;
    cell_9.disabled = true;

    cell_1.style.color = "red";
    cell_4.style.color = "red";
    cell_7.style.color = "red";
  } else if (
    cell_7.innerText == "X" &&
    cell_8.innerText == "X" &&
    cell_9.innerText == "X"
  ) {
    document.getElementById("status").innerHTML = "Player X won";

    cell_1.disabled = true;
    cell_2.disabled = true;
    cell_3.disabled = true;
    cell_4.disabled = true;
    cell_5.disabled = true;
    cell_6.disabled = true;

    cell_7.style.color = "red";
    cell_8.style.color = "red";
    cell_9.style.color = "red";
  } else if (
    cell_3.innerText == "X" &&
    cell_6.innerText == "X" &&
    cell_9.innerText == "X"
  ) {
    document.getElementById("status").innerHTML = "Player X won";

    cell_1.disabled = true;
    cell_2.disabled = true;
    cell_4.disabled = true;
    cell_5.disabled = true;
    cell_7.disabled = true;
    cell_8.disabled = true;

    cell_3.style.color = "red";
    cell_6.style.color = "red";
    cell_9.style.color = "red";
  } else if (
    cell_1.innerText == "X" &&
    cell_5.innerText == "X" &&
    cell_9.innerText == "X"
  ) {
    document.getElementById("status").innerHTML = "Player X won";
    cell_2.disabled = true;
    cell_3.disabled = true;
    cell_4.disabled = true;
    cell_6.disabled = true;
    cell_7.disabled = true;
    cell_8.disabled = true;

    cell_1.style.color = "red";
    cell_5.style.color = "red";
    cell_9.style.color = "red";
  } else if (
    cell_3.innerText == "X" &&
    cell_5.innerText == "X" &&
    cell_7.innerText == "X"
  ) {
    document.getElementById("status").innerHTML = "Player X won";
    cell_1.disabled = true;
    cell_2.disabled = true;
    cell_4.disabled = true;
    cell_6.disabled = true;
    cell_8.disabled = true;
    cell_9.disabled = true;

    cell_3.style.color = "red";
    cell_5.style.color = "red";
    cell_7.style.color = "red";
  } else if (
    cell_2.innerText == "X" &&
    cell_5.innerText == "X" &&
    cell_8.innerText == "X"
  ) {
    document.getElementById("status").innerHTML = "Player X won";
    cell_1.disabled = true;
    cell_2.disabled = true;
    cell_4.disabled = true;
    cell_6.disabled = true;
    cell_7.disabled = true;
    cell_9.disabled = true;

    cell_2.style.color = "red";
    cell_5.style.color = "red";
    cell_8.style.color = "red";
  } else if (
    cell_4.innerText == "X" &&
    cell_5.innerText == "X" &&
    cell_6.innerText == "X"
  ) {
    document.getElementById("status").innerHTML = "Player X won";
    cell_1.disabled = true;
    cell_2.disabled = true;
    cell_3.disabled = true;
    cell_7.disabled = true;
    cell_8.disabled = true;
    cell_9.disabled = true;

    cell_4.style.color = "red";
    cell_5.style.color = "red";
    cell_6.style.color = "red";
  } else if (
    cell_1.innerText == "O" &&
    cell_2.innerText == "O" &&
    cell_3.innerText == "O"
  ) {
    document.getElementById("status").innerHTML = "Player O won";
    cell_4.disabled = true;
    cell_5.disabled = true;
    cell_6.disabled = true;
    cell_7.disabled = true;
    cell_8.disabled = true;
    cell_9.disabled = true;

    cell_1.style.color = "red";
    cell_2.style.color = "red";
    cell_3.style.color = "red";
  } else if (
    cell_1.innerText == "O" &&
    cell_4.innerText == "O" &&
    cell_7.innerText == "O"
  ) {
    document.getElementById("status").innerHTML = "Player O won";
    cell_2.disabled = true;
    cell_3.disabled = true;
    cell_5.disabled = true;
    cell_6.disabled = true;
    cell_8.disabled = true;
    cell_9.disabled = true;

    cell_1.style.color = "red";
    cell_4.style.color = "red";
    cell_7.style.color = "red";
  } else if (
    cell_7.innerText == "O" &&
    cell_8.innerText == "O" &&
    cell_9.innerText == "O"
  ) {
    document.getElementById("status").innerHTML = "Player O won";
    cell_1.disabled = true;
    cell_2.disabled = true;
    cell_3.disabled = true;
    cell_4.disabled = true;
    cell_5.disabled = true;
    cell_6.disabled = true;

    cell_7.style.color = "red";
    cell_8.style.color = "red";
    cell_9.style.color = "red";
  } else if (
    cell_3.innerText == "O" &&
    cell_6.innerText == "O" &&
    cell_9.innerText == "O"
  ) {
    document.getElementById("status").innerHTML = "Player O won";
    cell_1.disabled = true;
    cell_2.disabled = true;
    cell_4.disabled = true;
    cell_5.disabled = true;
    cell_7.disabled = true;
    cell_8.disabled = true;
    cell_3.style.color = "red";
    cell_6.style.color = "red";
    cell_9.style.color = "red";
  } else if (
    cell_1.innerText == "O" &&
    cell_5.innerText == "O" &&
    cell_9.innerText == "O"
  ) {
    document.getElementById("status").innerHTML = "Player O won";
    cell_2.disabled = true;
    cell_3.disabled = true;
    cell_4.disabled = true;
    cell_6.disabled = true;
    cell_7.disabled = true;
    cell_8.disabled = true;

    cell_1.style.color = "red";
    cell_5.style.color = "red";
    cell_9.style.color = "red";
  } else if (
    cell_3.innerText == "O" &&
    cell_5.innerText == "O" &&
    cell_7.innerText == "O"
  ) {
    document.getElementById("status").innerHTML = "Player O won";
    cell_1.disabled = true;
    cell_2.disabled = true;
    cell_4.disabled = true;
    cell_6.disabled = true;
    cell_8.disabled = true;
    cell_9.disabled = true;

    cell_3.style.color = "red";
    cell_5.style.color = "red";
    cell_7.style.color = "red";
  } else if (
    cell_2.innerText == "O" &&
    cell_5.innerText == "O" &&
    cell_8.innerText == "O"
  ) {
    document.getElementById("status").innerHTML = "Player O won";
    cell_1.disabled = true;
    cell_3.disabled = true;
    cell_4.disabled = true;
    cell_6.disabled = true;
    cell_7.disabled = true;
    cell_9.disabled = true;

    cell_2.style.color = "red";
    cell_5.style.color = "red";
    cell_8.style.color = "red";
  } else if (
    cell_4.innerText == "O" &&
    cell_5.innerText == "O" &&
    cell_6.innerText == "O"
  ) {
    document.getElementById("status").innerHTML = "Player O won";
    cell_1.disabled = true;
    cell_2.disabled = true;
    cell_3.disabled = true;
    cell_7.disabled = true;
    cell_8.disabled = true;
    cell_9.disabled = true;

    cell_4.style.color = "red";
    cell_5.style.color = "red";
    cell_6.style.color = "red";
  } else if (
    (cell_1.innerText == "X" || cell_1.innerText == "O") &&
    (cell_2.innerText == "X" || cell_2.innerText == "O") &&
    (cell_3.innerText == "X" || cell_3.innerText == "O") &&
    (cell_4.innerText == "X" || cell_4.innerText == "O") &&
    (cell_5.innerText == "X" || cell_5.innerText == "O") &&
    (cell_6.innerText == "X" || cell_6.innerText == "O") &&
    (cell_7.innerText == "X" || cell_7.innerText == "O") &&
    (cell_8.innerText == "X" || cell_8.innerText == "O") &&
    (cell_9.innerText == "X" || cell_9.innerText == "O")
  ) {
    document.getElementById("status").innerHTML = "Match Tie";
  } else {
    if (player_ones_turn == true) {
      document.getElementById("status").innerHTML = "Player X Turn";
    } else {
      document.getElementById("status").innerHTML = "Player O Turn";
    }
  }

  if (document.getElementById("status").innerHTML == "Player X won") {
    score1.innerText = parseInt(score1.innerText) + 1;
  } else if(document.getElementById("status").innerHTML == "Player O won"){
    score2.innerText = parseInt(score2.innerText) + 1;
  }
  
}
