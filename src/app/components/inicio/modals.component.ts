import { Component, OnInit } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styles: [
  ]
})
export class ModalsComponent implements OnInit {

  mostrar1 = true;
  mostrar2 = false;
  mostrar3 = false;

  clase1 = "btn-warning";
  clase2 = "btn-outline-warning";
  clase3 = "btn-outline-warning";

  constructor() { }

  ngOnInit(): void {
  }

  cerrarTec() {
    $('#modalTecnologias').modal('hide');
    setTimeout(() => {
      this.pagina1();      
    }, 500);
  }

  pagina1() {
    this.mostrar1 = true;
    this.mostrar2 = false;
    this.mostrar3 = false;
    this.clase1 = "btn-warning";
    this.clase2 = "btn-outline-warning";
    this.clase3 = "btn-outline-warning";
  }
  pagina2() {
    this.mostrar1 = false;
    this.mostrar2 = true;
    this.mostrar3 = false;
    this.clase1 = "btn-outline-warning";
    this.clase2 = "btn-warning";
    this.clase3 = "btn-outline-warning";
  }
  pagina3() {
    this.mostrar1 = false;
    this.mostrar2 = false;
    this.mostrar3 = true;
    this.clase1 = "btn-outline-warning";
    this.clase2 = "btn-outline-warning";
    this.clase3 = "btn-warning";
  }
}
