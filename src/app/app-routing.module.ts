import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StartComponent } from './start/start.component';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './loginComponents/home/home.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { SignInComponent } from './loginComponents/sign-in/sign-in.component';
import { SignUpComponent } from './loginComponents/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './loginComponents/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './loginComponents/verify-email/verify-email.component';

// route guard
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  { path: 'sign-up', component: SignUpComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },

  { path: 'user', component: UserComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'user/:id', component: UserDetailComponent },
  { path: '', redirectTo: 'dasboard', pathMatch: 'full' },

  /*  { path: '**', component: HomeComponent }, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
