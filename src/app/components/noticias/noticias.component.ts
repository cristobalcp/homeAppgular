import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoticiaService } from 'src/app/services/noticia.service';
import { New, NewResponse } from 'src/app/interfaces/new';


declare let $: any;
@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styles: [
  ]
})
export class NoticiasComponent implements OnInit {

  news: New[] = [];
  pageLenght: boolean = true;

  constructor(public noticiasService: NoticiaService,
    private router: Router) {
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.noticiasService.noticiaCompleta = false;

    // Get all last news
    this.noticiasService.getLastNews()
      .subscribe((res: NewResponse) => {
        if (!res.ok) return;
        this.news.push(...res.news);
      });

  }

  mostrarNoticia(noticia: any) {
    this.noticiasService.noticiaSel = noticia;
    this.noticiasService.noticiaCompleta = true;

    this.router.navigateByUrl('noticiaCompleta');
  }

  // Ir a la página anterior
  restar() {
    this.pageLenght = true;
    this.noticiasService.getNewsReduce()
      .subscribe((res: NewResponse) => {
        if (!res.ok) return;
        this.news = res.news;
      });
      window.scrollTo(0, 0);
  }

  // Ir a la página siguiente
  sumar() {
    this.noticiasService.getNewsAdd()
      .subscribe((res: NewResponse) => {
        if (!res.ok) return;
        this.news = res.news;
        if(this.news.length === 8) this.pageLenght = true;
        if(this.news.length < 8) this.pageLenght = false;
        if(this.news.length === 0) this.restar();
        
        
      });
      window.scrollTo(0, 0);
  }
}
