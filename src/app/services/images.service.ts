import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

declare let $: any;
const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  img : Array<string> = [];
  
  constructor() {
    // this.img.push(`${URL}/new/img_author/img1.png`);

    this.img.push(`${URL}/image/ccenalmor/img1.png`);
    this.img.push(`${URL}/image/ccenalmor/img2.png`);
    this.img.push(`${URL}/image/ccenalmor/img3.jpg`);
    this.img.push(`${URL}/image/ccenalmor/img4.png`);

    this.img.push(`${URL}/new/img_new/noticia1.png`);
    this.img.push(`${URL}/new/img_new/noticia2.png`);
    this.img.push(`${URL}/new/img_new/noticia3.png`);
    this.img.push(`${URL}/new/img_new/noticia4.png`);
    this.img.push(`${URL}/new/img_new/noticia5.png`);
    this.img.push(`${URL}/new/img_new/noticia6.png`);
    this.img.push(`${URL}/new/img_new/noticia7.png`);
    this.img.push(`${URL}/new/img_new/noticia8.png`);
  }
  
}