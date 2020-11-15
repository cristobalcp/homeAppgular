import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoticiaService } from 'src/app/services/noticia.service';
import { ImagesService } from 'src/app/services/images.service';
import { New, NewResponse} from 'src/app/interfaces/new';
import { HttpClient } from '@angular/common/http';

declare let $: any;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styles: [
  ]
})
export class InicioComponent implements OnInit {

  mostrarYo: boolean = true;
  lastNews: New[] = [];
  imgAuthor0: string;

  constructor(private router: Router,
    private noticiasService: NoticiaService,
    public images: ImagesService,
    private httpClient: HttpClient) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    
    this.noticiasService.noticiaCompleta = false;

    // Get last 3 news
    this.noticiasService.getLastNews()
      .subscribe((res: NewResponse ) =>{
        if(!res.ok) return;
        this.lastNews.unshift(...res.news.slice(res.news.length - 3, res.news.length));
      });
      
  }

  toggleMostrar(){
    this.mostrarYo = !this.mostrarYo;
  }

  tecnologias(){
    $('#modalTecnologias').modal('show');
  }

  sobreMi(){
    $('#sobreMi').modal('show');

  }

  mostrarNoticia(newS : New){
    this.noticiasService.noticiaCompleta = true;
    this.noticiasService.noticiaSel = newS;    
    setTimeout(() => {
      this.router.navigateByUrl('noticiaCompleta');
    }, 100);
  }
  
  videoData: JSON;

  getAllVideos() {
    this.httpClient.get('http://127.0.0.1:5010/videos').subscribe(data => {
      this.videoData = data as JSON;
      console.log('HOLAAA  ', this.videoData);
    })
  }
}
