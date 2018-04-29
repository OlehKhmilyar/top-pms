import { RouterModule, Routes } from '@angular/router';

import { RegistrationComponent }   from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ProjectsComponent } from './projects/projects.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'registration', component: RegistrationComponent },
  { path: 'projects/:username', component: ProjectsComponent}

];

export const routing = RouterModule.forRoot(appRoutes);