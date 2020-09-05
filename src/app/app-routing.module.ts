import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './shared/login/login.component';
import {MainComponent} from './main/main.component';


const routes: Routes = [
  {
    path: '', loadChildren: () => import('./main/main.module').then(mod => mod.MainModule),
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
