import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {MainComponent} from './main.component';
import {UserComponent} from './user/user.component';
import {AuthGuard} from '../shared/helpers/auth.guard';
import {UserDTO} from '../../api/generated';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'store',
        component: HomeComponent
      },
      {
        path: 'about-us',
        component: HomeComponent
      },
      {
        path: 'cart',
        component: HomeComponent,
      },
      {
        path: 'users',
        component: UserComponent,
        canActivate: [AuthGuard],
        data: {roles: [UserDTO.RoleEnum.ADMIN]}
      },
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
