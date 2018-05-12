import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { routing } from './app-routing.module';
import { ProjectsService } from './projects/projects.service';
import { UserService } from './login/user.service';
import { TasksService } from './tasks/tasks.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ListItemComponent } from './list-item/list-item.component';

import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailsComponent } from './projects/project-details/project-details.component';
import { ProjectCreateComponent } from './projects/project-create/project-create.component';
import { ProjectUpdateComponent } from './projects/project-update/project-update.component';

import { TasksComponent } from './tasks/tasks.component';
import { TaskDetailsComponent } from './tasks/task-details/task-details.component';
import { TaskCreateComponent } from './tasks/task-create/task-create.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegistrationComponent,
    ProjectsComponent,
    TasksComponent,
    ProjectDetailsComponent,
    ProjectCreateComponent,
    ProjectUpdateComponent,
    ListItemComponent,
    TaskDetailsComponent,
    TaskCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    UserService,
    ProjectsService,
    TasksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
