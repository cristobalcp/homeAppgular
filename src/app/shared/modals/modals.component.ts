import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { UserService } from 'src/app/services/user.service';
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
    nombre: 'ccenalmor',
    password: 'abc123'
  }
  constructor(
    public modalService: ModalService,
    public userService : UserService
    ) {
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

  async login(forma: NgForm) {
    if(forma.invalid) this.salirLogin();

    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000
    });
    const usuarioValido = await this.userService.login(this.usuarioLogin.nombre, this.usuarioLogin.password); 
    
    if (usuarioValido) {
      this.salirLogin();
      this.userService.auth = true;
      
      // Alerta login correcto
      Toast.fire({
        title: `${this.usuarioLogin.nombre} online`,
        background: 'rgb(23, 191, 99)',
        icon: 'success'
      });
      
      // Online
      this.modalService.online = true;

    } else {
      Toast.fire({
        title: 'Invalid credentials',
        background: 'rgb(23, 191, 99)',
        icon: 'error'
      });
    }
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