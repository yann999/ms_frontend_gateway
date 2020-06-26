import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MsgatewaySharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [MsgatewaySharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent]
})
export class MsgatewayHomeModule {}
