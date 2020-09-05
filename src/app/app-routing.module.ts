import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from './user/user.component';
import {UserFormComponent} from './user/user-form/user-form.component';
import {UserLoginComponent} from './user/user-login/user-login.component';


const routes: Routes = [
  { path: 'users', component: UserComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'adduser', component: UserFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
