import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';


const URL = environment.url;

@Pipe({
  name: 'imgAuthor'
})
export class ImgAuthorPipe implements PipeTransform {

  transform(img: string): unknown {
    return `${URL}/new/img_author/${img}`;
  }

}

