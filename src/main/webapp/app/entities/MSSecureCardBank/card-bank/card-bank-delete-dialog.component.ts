import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { ICardBank } from 'app/shared/model/MSSecureCardBank/card-bank.model';
import { CardBankService } from './card-bank.service';

@Component({
  templateUrl: './card-bank-delete-dialog.component.html'
})
export class CardBankDeleteDialogComponent {
  cardBank?: ICardBank;

  constructor(protected cardBankService: CardBankService, public activeModal: NgbActiveModal, protected eventManager: JhiEventManager) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.cardBankService.delete(id).subscribe(() => {
      this.eventManager.broadcast('cardBankListModification');
      this.activeModal.close();
    });
  }
}
