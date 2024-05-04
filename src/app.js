/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const suits = ["\u2660", "\u2665", "\u2666", "\u2663"];
  const ranks = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let cardIndex = 0;

  //constructor to create an object with rank and suit
  function Card(s, r) {
    this.rank = r;
    this.suit = s;
  }
  //creating the deck of all cards
  let deck = [];
  for (let s of suits) {
    for (let r of ranks) {
      deck.push(new Card(s, r));
    }
  }

  let button = document.querySelector(".btn");
  button.addEventListener("click", event => {
    //getting the card from deck array
    let currentCard = deck[cardIndex];
    cardIndex++;

    //resetting the counter
    if (cardIndex == deck.length) {
      cardIndex = 0;
    }

    //showing the container div on click
    let divContainer = document.querySelector(".container");
    divContainer.classList.remove("d-none");

    //setting the suit
    let topSuitDiv = document.querySelector("#topSuit");
    let bottomSuitDiv = document.querySelector("#bottomSuit");
    topSuitDiv.innerHTML = currentCard.suit;
    bottomSuitDiv.innerHTML = currentCard.suit;

    //setting the rank
    let rankDiv = document.querySelector("#rank");
    rankDiv.innerHTML = currentCard.rank;

    //adjusting the position when number is 10
    if (currentCard.rank == 10) {
      rankDiv.style.left = "2.5rem";
    } else {
      rankDiv.style.left = "5rem";
    }

    //setting the color to red for heart and diamond
    if (currentCard.suit == "\u2665" || currentCard.suit == "\u2666") {
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
