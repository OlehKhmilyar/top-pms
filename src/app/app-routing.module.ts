import { RouterModule, Routes } from '@angular/router';

import { RegistrationComponent }   from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ProjectsComponent } from './projects/projects.component';
import { TasksComponent } from './tasks/tasks.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'registration', component: RegistrationComponent },
  { path: 'projects', component: ProjectsComponent},
  { path: 'tasks', component: TasksComponent}

];

export const routing = RouterModule.forRoot(appRoutes);