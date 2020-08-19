import { Component, OnInit } from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styles: [
  ]
})
export class InicioComponent implements OnInit {

  mostrarYo = true;
  
  constructor() { }

  ngOnInit(): void {
  }

  toggleMostrar(){
    this.mostrarYo = !this.mostrarYo;
  }

  tecnologias(){
    $('#modalTecnologias').modal('show');

  }
}
