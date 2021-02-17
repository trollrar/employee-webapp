import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './shared/login/login.component';
import {AuthGuard} from './shared/helpers/auth.guard';
import {UserDTO} from '../api/generated';
import {HomeComponent} from './home/home.component';
import {UserComponent} from './user/user.component';


const routes: Routes = [
  {
    path: 'employees', loadChildren: () => import('./main/main.module').then(mod => mod.MainModule),
    canActivate: [AuthGuard],
    data: {roles: [UserDTO.RoleEnum.ADMIN, UserDTO.RoleEnum.USER]}
  },
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'users',
    component: UserComponent,
    canActivate: [AuthGuard],
    data: {roles: [UserDTO.RoleEnum.ADMIN]}
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
