import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { MessagesService } from "../../services/messages.service";
import { UserService } from 'src/app/services/user.service';
import { VideoService } from 'src/app/services/video.service';

import Swal from 'sweetalert2';

declare let $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  // styles: ["./navbar.component.css"]
})

export class NavbarComponent implements OnInit {

  ojo: boolean = true;
  login1: boolean = true;
  input1: boolean;
  clave: string = '5f4adbee7a06bc16e8ff86c7'; // Solo en desarrollo
  totalMessages: number = 0;

  constructor(
    public modalService: ModalService,
    public messagesService: MessagesService,
    public userService: UserService,
    public videoService: VideoService

  ) {
    this.modalService.ojo2 = true;
  }

  ngOnInit(): void {
    this.messagesService.getMessages()
      .subscribe((res: any) => {
        if (!res.ok) return;
        if (res.messages.length == null) return;
        this.totalMessages = res.messages.length;
      });
  }

  cerrarNavbar() {
    $('.navbar-collapse').collapse('hide');
    this.input1 = false;
  }

  alerta() {
    $('#alerta').modal('show');
    this.cerrarNavbar();
  }

  onClick() {
    this.ojo = !this.ojo;
    this.login1 = !this.login1;
    this.modalService.ojo2 = false;

    $(() => { $('[data-toggle="tooltip"]').tooltip(); });
  }

  entrar() {
    this.login1 = false;
    this.input1 = true;
    $('#focusClave').trigger('focus');
    $('[data-toggle="tooltip"]').tooltip('hide');

  }

  inputLogin() {
    if (this.clave !== this.userService.pass) {
      this.cerrarNavbar();
      this.login1 = true;

    } else {
      this.cerrarNavbar();
      this.login1 = false;
      // Abrir modal login
      $('#loginModal').modal('show');

      // Establecemos el foco al abrir la modal
      $(document).ready(() => {
        $('#loginModal').on('shown.bs.modal', () => {
          $('#focusLogin').trigger('focus');
        });
      });
    }
    this.clave = '';
  }

  logOut() {
    this.userService.logOut();
    this.modalService.logOut();
    this.cerrarNavbar();
    this.login1 = true;

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

  video() {
    URL = $('#video_url').val().trim();
    let formato = 'mp3';
    let no_playlist = true;

    if (!this.isYoutubeUrl(URL)) return alert('URL no válida');
    
    this.videoService.getVideo(URL, formato, no_playlist);
  }

  isYoutubeUrl(str) {
    return str.match(/(http:|https:)?\/\/(www\.)?(youtube.com|youtu.be)\/(watch)?(\?v=)?(\S+)?/);
  }
  
}
