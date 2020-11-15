import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';


const URL = environment.url;

@Pipe({
  name: 'imgNew'
})
export class ImgNewPipe implements PipeTransform {

  transform(img: string): unknown {
    return `${URL}/new/img_new/${img}`;
  }

}

