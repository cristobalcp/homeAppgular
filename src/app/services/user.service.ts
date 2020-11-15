import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { pluck } from 'rxjs/operators';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token: string = null;
  auth: boolean = false;
  pass: string = '';

  constructor(private http: HttpClient,
    private router : Router) {
      this.getId();
     }

  login(name: string, password: string){
    const DATA = {name, password};

    return new Promise(resolve =>{
      this.http.post(`${URL}/user/login`, DATA).subscribe((res :any) =>{
        if(!res.ok){
          this.logOut();
          resolve(false);
        }else{
          this.token = res.token;  
          resolve(true);
        }
      });
    })
  }

  logOut() {
    this.token = null;
    this.auth = false;
    this.router.navigateByUrl('inicio');
  }

  getId() : any{
    return this.http.get(`${URL}/about/`)
    .pipe(
      pluck('aboutMe', '0', '_id'))
    .subscribe((res:any) => {
      this.pass = res;
    });
  }
}
