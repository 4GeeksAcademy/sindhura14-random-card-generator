/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const suits = ["\u2660", "\u2665", "\u2666", "\u2663"];
  const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
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
    let suitDivs = document.querySelectorAll(".suit");
    suitDivs.forEach(suitDiv => {
      suitDiv.innerHTML = currentCard.suit;
      suitDiv.style.color =
        currentCard.suit == "\u2665" || currentCard.suit == "\u2666"
          ? "red"
          : "";
    });

    //setting the rank
    let rankDiv = document.querySelector("#rank");
    rankDiv.innerHTML = currentCard.rank;
    rank.style.color =
      currentCard.suit == "\u2665" || currentCard.suit == "\u2666" ? "red" : "";

    //adjusting the position when number is 10
    rankDiv.style.left = currentCard.rank == 10 ? "2.5rem" : "5rem";
  });
};
