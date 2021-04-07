import { Component, OnInit , EventEmitter, Output} from '@angular/core';
import { Card } from 'src/app/models/card';
import { CustomerDetails } from 'src/app/models/customerDetails';
import { CardService } from 'src/app/service/card.service';
import { LocalStorageService } from 'src/app/service/local-storage.service';

@Component({
  selector: 'app-card-saved',
  templateUrl: './card-saved.component.html',
  styleUrls: ['./card-saved.component.css']
})
export class CardSavedComponent implements OnInit {

  cards: Card[];
  currentCustomer: CustomerDetails;
  @Output() selectedCard: EventEmitter<Card> = new EventEmitter<Card>();

  constructor(private cardService: CardService,
              private localStorageService: LocalStorageService) {
  }

  ngOnInit(): void {
     this.currentCustomer = Object.assign({}, this.localStorageService.getCurrentCustomer());
     this.getCardsByCustomerId(this.currentCustomer.id);
  }

  getCardsByCustomerId(customerId: number) {
     this.cardService.getByCustomerId(customerId).subscribe(response => {
        this.cards = response.data;
     });
  }

  selectCard(cardId: number) {
     let selectedCard = this.cards.find(card => card.id == cardId);

     // @ts-ignore
     let newSelectedCard: Card = {
        cardNameSurname: selectedCard.cardNameSurname,
        cardNumber: selectedCard.cardNumber,
        validDate: selectedCard.validDate,
        customerId: selectedCard.customerId,
        cvv: selectedCard.cvv
     };

     this.selectedCard.emit(newSelectedCard);
  }

}
