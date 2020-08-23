import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare let $: any;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styles: [
  ]
})
export class InicioComponent implements OnInit {

  mostrarYo = true;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    $(() => { $('[data-toggle="tooltip"]').tooltip(); });

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

  mostrarNoticia(){
    $(() => { $('[data-toggle="tooltip"]').tooltip('hide'); });
    setTimeout(() => {
      this.router.navigateByUrl('noticiaCompleta');
    }, 150);
  }
}
