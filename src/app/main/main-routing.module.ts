import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {MainComponent} from './main.component';
import {UserComponent} from './user/user.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
        {
          path: '',
          component: HomeComponent,
        },
        {
          path: 'users',
          component: UserComponent,
        },
      ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
