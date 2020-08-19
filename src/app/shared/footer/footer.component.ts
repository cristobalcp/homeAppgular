import { Component, OnInit } from '@angular/core';

import { ModalService } from 'src/app/services/modal.service';
import Swal from 'sweetalert2';

declare let $: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})

export class FooterComponent implements OnInit {

  year = new Date().getFullYear();

  constructor(public modalService: ModalService) {
    this.modalService.privacidad = true;
  }

  ngOnInit(): void {
  }

  whatsApp() {
    const Toast = Swal.mixin({
      toast: true,
      position: 'center',
      showConfirmButton: true,
      timerProgressBar: true,
      customClass: {
        confirmButton: 'back9'
      }
    });

    Toast.fire({
      title: '698 17 41 65',
      background: 'rgb(23, 191, 99)',
    });
  }

  privacidad() {
    this.modalService.privacidad = true;
    $('#privacidad').modal();
  }
  
  salir() {
    setTimeout(() => {
      $('#privacidad').modal('hide');
    }, 500);
  }

  irAlerta() {
    $('#privacidad').modal('hide');
    setTimeout(() => {
      $('#alerta').modal();
    }, 500);
  }


}
