import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'card-bank',
        loadChildren: () => import('./MSSecureCardBank/card-bank/card-bank.module').then(m => m.MsSecureCardBankCardBankModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ]
})
export class MsgatewayEntityModule {}
