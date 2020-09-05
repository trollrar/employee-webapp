import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {MainRoutingModule} from './main-routing.module';
import {MainComponent} from './main.component';
import { UserComponent } from './user/user.component';



@NgModule({
  declarations: [HomeComponent, MainComponent, UserComponent],
  imports: [
    MainRoutingModule,
    CommonModule
  ]
})
export class MainModule { }
