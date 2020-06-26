import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ICardBank } from 'app/shared/model/MSSecureCardBank/card-bank.model';
import { CardBankService } from './card-bank.service';
import { CardBankDeleteDialogComponent } from './card-bank-delete-dialog.component';

@Component({
  selector: 'jhi-card-bank',
  templateUrl: './card-bank.component.html'
})
export class CardBankComponent implements OnInit, OnDestroy {
  cardBanks?: ICardBank[];
  eventSubscriber?: Subscription;

  constructor(protected cardBankService: CardBankService, protected eventManager: JhiEventManager, protected modalService: NgbModal) {}

  loadAll(): void {
    this.cardBankService.query().subscribe((res: HttpResponse<ICardBank[]>) => (this.cardBanks = res.body || []));
  }

  ngOnInit(): void {
    this.loadAll();
    this.registerChangeInCardBanks();
  }

  ngOnDestroy(): void {
    if (this.eventSubscriber) {
      this.eventManager.destroy(this.eventSubscriber);
    }
  }

  trackId(index: number, item: ICardBank): number {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return item.id!;
  }

  registerChangeInCardBanks(): void {
    this.eventSubscriber = this.eventManager.subscribe('cardBankListModification', () => this.loadAll());
  }

  delete(cardBank: ICardBank): void {
    const modalRef = this.modalService.open(CardBankDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.cardBank = cardBank;
  }
}
