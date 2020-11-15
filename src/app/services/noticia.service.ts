import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';


const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  noticiaSel: any;
  noticiaCompleta: boolean = false;
  page: number = 1;

  constructor(private http: HttpClient) { }

  getLastNews() {
    return this.http.get(`${URL}/new/?page=${this.page}`);
  }

  getNewsAdd() {
    this.page++;
    return this.http.get(`${URL}/new/?page=${this.page}`);
  }
  getNewsReduce() {
    (this.page === 1) ? this.page = 1 : this.page--;
    return this.http.get(`${URL}/new/?page=${this.page}`);
  }
}
