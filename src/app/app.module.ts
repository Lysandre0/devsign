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
import {CardModule} from 'primeng/card';
import { QRCodeModule } from 'angularx-qrcode';


import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToggleButtonModule } from 'primeng/togglebutton';
import {ChipModule} from "primeng/chip";
import { EmailSignComponent } from './containers/email-sign/email-sign.component';
import {CheckboxModule} from 'primeng/checkbox';


import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { CanvasComponent } from './components/canvas/canvas.component';
import {DialogModule} from "primeng/dialog";
import {ProgressSpinnerModule} from "primeng/progressspinner";

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);

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
    EmailSignComponent,
    CanvasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    FormsModule,
    BrowserAnimationsModule,
    ToggleButtonModule,
    FormsModule,
    ChipModule,
    FullCalendarModule,
    CheckboxModule,
    QRCodeModule,
    DialogModule,
    ProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
