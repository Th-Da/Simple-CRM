import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StartComponent } from './start/start.component';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './loginComponents/home/home.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { SignInComponent } from './loginComponents/sign-in/sign-in.component';
import { SignUpComponent } from './loginComponents/sign-up/sign-up.component';

// route guard
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  /*   { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginStartComponent,
    children: [
      { path: 'signup', component: SignUpComponent },
      { path: 'singin', component: SignInComponent },
    ],
  },

  { path: 'user', component: UserComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'user/:id', component: UserDetailComponent }, */

  /*   { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },

  { path: 'dashboard', component: StartComponent },
  { path: 'user', component: UserComponent, outlet: 'loggedInUser' },
  { path: 'user/:id', component: UserDetailComponent, outlet: 'loggedInUser' },
 */

  { path: 'user', component: UserComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'user/:id', component: UserDetailComponent },

  {
    path: 'home',
    component: HomeComponent,
  },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
