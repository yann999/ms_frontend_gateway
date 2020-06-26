import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ICardBank } from 'app/shared/model/MSSecureCardBank/card-bank.model';

@Component({
  selector: 'jhi-card-bank-detail',
  templateUrl: './card-bank-detail.component.html'
})
export class CardBankDetailComponent implements OnInit {
  cardBank: ICardBank | null = null;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ cardBank }) => (this.cardBank = cardBank));
  }

  previousState(): void {
    window.history.back();
  }
}
