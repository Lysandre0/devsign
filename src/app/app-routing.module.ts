import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./containers/login/login.component";
import {DashboardComponent} from "./containers/dashboard/dashboard.component";
import {ModuleDetailComponent} from "./containers/module-detail/module-detail.component";
import {EmailSignComponent} from "./containers/email-sign/email-sign.component";

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
    path: 'email',
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
