import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgAuthorPipe } from '../img-author.pipe';
import { ImgNewPipe } from '../img-new.pipe';

@NgModule({
  declarations: [ ImgAuthorPipe, ImgNewPipe ],
  imports: [
    CommonModule
  ],
  exports: [ ImgAuthorPipe, ImgNewPipe ]
})
export class PipesModule { }
