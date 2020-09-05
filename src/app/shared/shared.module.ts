import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {CookieService} from 'ngx-cookie-service';
import {AuthenticationService} from './authentication/authentication.service';
import {Configuration} from '../../api/generated';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [AuthenticationService],
})
export class SharedModule {}
