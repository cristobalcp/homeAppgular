import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';


const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private http: HttpClient) { }

  getMessages(): any {
    return this.http.get(`${URL}/contact/`);
  }

  deleteMessage(id: string = ""): any {
    return this.http.delete(`${URL}/contact/${id}`);
  }
}
