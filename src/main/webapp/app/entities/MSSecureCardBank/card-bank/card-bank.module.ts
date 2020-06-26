import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MsgatewaySharedModule } from 'app/shared/shared.module';
import { CardBankComponent } from './card-bank.component';
import { CardBankDetailComponent } from './card-bank-detail.component';
import { CardBankUpdateComponent } from './card-bank-update.component';
import { CardBankDeleteDialogComponent } from './card-bank-delete-dialog.component';
import { cardBankRoute } from './card-bank.route';

@NgModule({
  imports: [MsgatewaySharedModule, RouterModule.forChild(cardBankRoute)],
  declarations: [CardBankComponent, CardBankDetailComponent, CardBankUpdateComponent, CardBankDeleteDialogComponent],
  entryComponents: [CardBankDeleteDialogComponent]
})
export class MsSecureCardBankCardBankModule {}
