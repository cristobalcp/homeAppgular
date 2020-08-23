import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

declare let $: any;

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styles: []
})
export class ModalsComponent implements OnInit {

  mensaje = {
    email: '',
    mensaje: ''
  }
  
  usuarioLogin = {
    nombre: 'cristobalcpl',
    password: '123'
  }
  constructor(public modalService: ModalService) {
    this.modalService.privacidadSeleccionada = true;
  }

  ngOnInit(): void { }

  politicaPrivacidad() {
    this.modalService.politicaPrivacidad();
  }
  cambioPrivacidad() {
    this.modalService.cambioPrivacidad();
  }
  contacto() {
    this.modalService.contacto();
  }
  contactoCristobal(f: NgForm) {
    this.limpiarMensaje();
    $('#contacto').modal('hide');

    if (f.invalid) {
      // Alerta
      const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: false,
        timer: 3000
      });

      Toast.fire({
        title: 'Todos los campos son obligatorios',
        background: 'rgb(23, 191, 99)',
        icon: 'error'
      });
    } else {

      // Alerta
      const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: false,
        timer: 3000
      });

      Toast.fire({
        title: 'Mensaje enviado correctamente',
        background: 'rgb(23, 191, 99)',
        icon: 'success'
      });
    }
  }
  limpiarMensaje() {
    this.mensaje.email = "";
    this.mensaje.mensaje = "";
  }
  login(forma: NgForm) {

    if (this.usuarioLogin.nombre === 'cristobalcpl' && this.usuarioLogin.password === '123') {
      // Alerta login correcto
      const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000
      });

      Toast.fire({
        title: this.usuarioLogin.nombre + ' online',
        background: 'rgb(23, 191, 99)',
        icon: 'success'
      });
      
      // Online
      this.modalService.online = true;

    } else {
      // Alerta login incorrecto
      const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000
      });

      Toast.fire({
        title: 'Invalid credentials',
        background: 'rgb(23, 191, 99)',
        icon: 'error'
      });
    }

    this.salirLogin();
    $('.navbar-collapse').collapse('hide');
    this.limpiarUsuario();
  }
  salirLogin(){
    $('#loginModal').modal('hide');
  }
  limpiarUsuario() {
    this.usuarioLogin.nombre = "";
    this.usuarioLogin.password = "";
  }
}