import {Injectable, Optional} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Configuration, UserControllerService, UserDTO, UserLoginDTO} from '../../../api/generated';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<UserDTO>;
  public currentUser: Observable<UserDTO>;

  constructor(@Optional() private configuration: Configuration, private userController: UserControllerService) {
    console.log('authStarted');
    const userJwt = localStorage.getItem(USER_JWT_STORAGE_KEY);
    console.log('parsed');

    let userDto: UserDTO;
    if (userJwt != null) {
      userDto = JSON.parse(localStorage.getItem(USER_STORAGE_KEY));
      this.configuration.apiKeys.Authorization = 'Bearer ' + userJwt;
    }
    this.currentUserSubject = new BehaviorSubject<UserDTO>(userDto);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): UserDTO {
    return this.currentUserSubject.value;
  }

  login(loginDTO: UserLoginDTO) {
    return this.userController.loginUsingPOST(loginDTO)
      .pipe(
        map(user => {
          // login successful if there's a jwt token in the response
          if (user.userDTO && user.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user.userDTO));
            localStorage.setItem(USER_JWT_STORAGE_KEY, user.token);

            this.configuration.apiKeys.Authorization = 'Bearer ' + user.token;
            this.currentUserSubject.next(user.userDTO);
          }

          return user;
        }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem(USER_STORAGE_KEY);
    localStorage.removeItem(USER_JWT_STORAGE_KEY);
    this.configuration.apiKeys.Authorization = '';
    this.currentUserSubject.next(null);
  }
}

export const USER_STORAGE_KEY = 'currentUser';
export const USER_JWT_STORAGE_KEY = 'currentUserJwt';

