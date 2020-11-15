import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';


const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class AboutMeService {

  constructor(private http: HttpClient) { }
 
    getTech() : any{
      return this.http.get(`${URL}/tech/`);
    }

    getAboutMe() : any{
      return this.http.get(`${URL}/about/`);
    }
}

