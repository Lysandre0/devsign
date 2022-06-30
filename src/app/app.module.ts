import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './containers/login/login.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { ModuleDetailComponent } from './containers/module-detail/module-detail.component';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from './containers/header/header.component';
import { PlanningComponent } from './components/planning/planning.component';
import { CardsListComponent } from './components/cards-list/cards-list.component';
import { QrcodeSignComponent } from './containers/qrcode-sign/qrcode-sign.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ModuleDetailComponent,
    HeaderComponent,
    PlanningComponent,
    CardsListComponent,
    QrcodeSignComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
