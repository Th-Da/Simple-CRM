import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StartComponent } from './start/start.component';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { LoginStartComponent } from './loginComponents/login-start/login-start.component';
import { SignInComponent } from './loginComponents/sign-in/sign-in.component';
import { SignUpComponent } from './loginComponents/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginStartComponent,
    children: [
      { path: 'signup', component: SignUpComponent },
      { path: 'singin', component: SignInComponent },
    ],
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'start',
    component: StartComponent,
    children: [
      { path: 'user', component: UserComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'user/:id', component: UserDetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
