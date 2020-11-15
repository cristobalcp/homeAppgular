import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(public userService : UserService){}

  canActivate():  boolean {
    if(this.userService.auth === true) return true;
    else return false;
  }
  
}
