import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import Swal from 'sweetalert2';

declare let $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  ojo = true;
  login1 = false;
  input1: boolean;
  clave = '';

  constructor(public modalService: ModalService) {
    this.modalService.ojo2 = true;
   }

  ngOnInit(): void {
  }

  cerrarNavbar() {
    $('.navbar-collapse').collapse('hide');
    this.input1 = false;
    this.login1 = false;
  }

  alerta() {
    $('#alerta').modal('show');
    this.cerrarNavbar();
  }

  onClick() {
    this.ojo = !this.ojo;
    this.login1 = !this.login1;
    this.modalService.ojo2 = false;
    console.log(this.login1)

    $(() => { $('[data-toggle="tooltip"]').tooltip(); });
  }

  entrar() {
    this.login1 = false;
    this.input1 = true;
    $('#focusClave').trigger('focus');
    $('[data-toggle="tooltip"]').tooltip('hide');
  }

  inputLogin() {
    if (this.clave !== '123') {
      this.login1 = false;
      this.input1 = false;
      this.clave = '';
      this.cerrarNavbar();

    } else {
      this.login1 = false;
      this.input1 = false;
      this.clave = '';
      this.cerrarNavbar();
      // Abrir modal login
      $('#loginModal').modal('show');

      // Establecemos el foco al abrir la modal
      $(document).ready(() => {
        $('#loginModal').on('shown.bs.modal', () => {
          $('#focusLogin').trigger('focus');
        });
      });
    }
  }

  logOut(){
    this.modalService.logOut();
    this.cerrarNavbar();
    // Alerta logOut
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000
    });

    Toast.fire({
      title: 'OFFLINE',
      background: 'rgb(23, 191, 99)',
      icon: 'success'
    });
  }
}
