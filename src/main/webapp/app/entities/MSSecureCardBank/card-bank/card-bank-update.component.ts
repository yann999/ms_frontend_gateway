import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ICardBank, CardBank } from 'app/shared/model/MSSecureCardBank/card-bank.model';
import { CardBankService } from './card-bank.service';

@Component({
  selector: 'jhi-card-bank-update',
  templateUrl: './card-bank-update.component.html'
})
export class CardBankUpdateComponent implements OnInit {
  isSaving = false;

  editForm = this.fb.group({
    id: [],
    codeEncoded: []
  });

  constructor(protected cardBankService: CardBankService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ cardBank }) => {
      this.updateForm(cardBank);
    });
  }

  updateForm(cardBank: ICardBank): void {
    this.editForm.patchValue({
      id: cardBank.id,
      codeEncoded: cardBank.codeEncoded
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const cardBank = this.createFromForm();
    if (cardBank.id !== undefined) {
      this.subscribeToSaveResponse(this.cardBankService.update(cardBank));
    } else {
      this.subscribeToSaveResponse(this.cardBankService.create(cardBank));
    }
  }

  private createFromForm(): ICardBank {
    return {
      ...new CardBank(),
      id: this.editForm.get(['id'])!.value,
      codeEncoded: this.editForm.get(['codeEncoded'])!.value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ICardBank>>): void {
    result.subscribe(
      () => this.onSaveSuccess(),
      () => this.onSaveError()
    );
  }

  protected onSaveSuccess(): void {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError(): void {
    this.isSaving = false;
  }
}
