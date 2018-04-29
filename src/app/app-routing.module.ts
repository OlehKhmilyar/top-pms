import { RouterModule, Routes } from '@angular/router';

import { RegistrationComponent }   from './registration/registration.component';
import { LoginComponent }      from './login/login.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'registration', component: RegistrationComponent },
];

export const routing = RouterModule.forRoot(appRoutes);