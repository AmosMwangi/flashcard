import { Component, OnInit } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  cards: Card[] = [
    new Card(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son'),
    new Card(2,'Buy Cookies','I have to buy cookies for the parrot'),
    new Card(3,'Get new Phone Case','Diana has her birthday coming up soon'),
    new Card(4,'Get Dog Food','Pupper likes expensive snacks'),
    new Card(5,'Solve math homework','Damn Math'),
    new Card(6,'Plot my world domination plan','Cause I am an evil overlord'),
  ];

  toggleDetails(index){
    this.cards[index].showDescription = !this.cards[index].showDescription;
  }

  completeCard(isComplete, index){
    if (isComplete) {
      this.cards.splice(index,1);
    }
  }
  
  constructor() { }
 
  ngOnInit() {
  }

}