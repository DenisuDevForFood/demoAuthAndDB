import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment.prod';
import {TaskService} from './services/task.service';
import {FormsModule} from '@angular/forms';
import { TaskTableComponent } from './task-table/task-table.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { LoginPageComponent } from './login-page/login-page.component';
import {AuthService} from './services/auth.service';
import {AuthGuard} from './services/auth.guard';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {path: '', component: LoginPageComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TaskTableComponent,
    AddTaskComponent,
    LoginPageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
