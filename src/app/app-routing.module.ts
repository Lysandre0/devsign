import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./containers/login/login.component";
import {DashboardComponent} from "./containers/dashboard/dashboard.component";
import {ModuleDetailComponent} from "./containers/module-detail/module-detail.component";
<<<<<<< HEAD
import {QrcodeSignComponent} from "./containers/qrcode-sign/qrcode-sign.component";
=======
import {EmailSignComponent} from "./containers/email-sign/email-sign.component";

>>>>>>> 57ab6fedf2e7c9ada3f2bac1a1ccbf0afc2600f3
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'module/:id',
    component: ModuleDetailComponent
  },
  {
<<<<<<< HEAD
    path: 'qrcode-sign',
    component: QrcodeSignComponent
  },
=======
    path: 'module/:id/email',
    component: EmailSignComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
>>>>>>> 57ab6fedf2e7c9ada3f2bac1a1ccbf0afc2600f3
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
