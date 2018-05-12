import { RouterModule, Routes } from '@angular/router';

import { RegistrationComponent }   from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ProjectsComponent } from './projects/projects.component';
import { TasksComponent } from './tasks/tasks.component';
import { ProjectDetailsComponent } from './projects/project-details/project-details.component';
import { ProjectCreateComponent } from './projects/project-create/project-create.component';
import { ProjectUpdateComponent } from './projects/project-update/project-update.component';
import { TaskDetailsComponent } from './tasks/task-details/task-details.component';
import { TaskCreateComponent } from './tasks/task-create/task-create.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'registration', component: RegistrationComponent },
  { path: 'projects', component: ProjectsComponent},
  { path: 'projects/create', component: ProjectCreateComponent},
  { path: 'projects/:id', component: ProjectDetailsComponent},
  { path: 'projects/:id/update', component: ProjectUpdateComponent},
  { path: 'tasks', component: TasksComponent},
  { path: 'tasks/create', component: TaskCreateComponent},
  { path: 'tasks/:id', component: TaskDetailsComponent}

];

export const routing = RouterModule.forRoot(appRoutes);