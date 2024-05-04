/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const suits = ["\u2660", "\u2665", "\u2666", "\u2663"];
  const ranks = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

  let button = document.querySelector(".btn");
  button.addEventListener("click", event => {
    let suit = suits[Math.floor(Math.random() * suits.length)];
    let topSuitDiv = document.querySelector("#topSuit");
    let bottomSuitDiv = document.querySelector("#bottomSuit");
    topSuitDiv.innerHTML = suit;
    bottomSuitDiv.innerHTML = suit;

    let rank = ranks[Math.floor(Math.random() * ranks.length)];
    let rankDiv = document.querySelector("#rank");

    if (rank == 10) {
      rankDiv.style.left = "2.5rem";
    } else {
      rankDiv.style.left = "5rem";
    }
    rankDiv.innerHTML = rank;
    if (suit == "\u2665" || suit == "\u2666") {
      topSuitDiv.style.color = "red";
      bottomSuitDiv.style.color = "red";
      rankDiv.style.color = "red";
    } else {
      topSuitDiv.style.color = "";
      bottomSuitDiv.style.color = "";
      rankDiv.style.color = "";
    }
  });
};
