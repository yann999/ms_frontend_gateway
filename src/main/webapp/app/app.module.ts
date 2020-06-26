import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { MsgatewaySharedModule } from 'app/shared/shared.module';
import { MsgatewayCoreModule } from 'app/core/core.module';
import { MsgatewayAppRoutingModule } from './app-routing.module';
import { MsgatewayHomeModule } from './home/home.module';
import { MsgatewayEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    MsgatewaySharedModule,
    MsgatewayCoreModule,
    MsgatewayHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    MsgatewayEntityModule,
    MsgatewayAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class MsgatewayAppModule {}
