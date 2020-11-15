import { Component, OnInit } from '@angular/core';
import { MessagesService } from "../../services/messages.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styles: [
  ]
})
export class MensajesComponent implements OnInit {

  messagesEmail: string[] = [];
  messageSel : any;

  constructor(public messagesService: MessagesService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    
    this.getMessages();
  }
  // Gets all actual messages
  getMessages(){
    this.messagesEmail = [];

    this.messagesService.getMessages()
      .subscribe((res: any) => {
        if (!res.ok) return;        
        this.messagesEmail.push(...res.messages);
        if(this.messagesEmail.length === 0) this.showAlert('No hay mensajes', 'rgb(228, 87, 46)');
      });
  }

  // Deletes selected message
  deleteMessage(message){  
    this.messageSel = message;          
    this.messagesService.deleteMessage(this.messageSel._id).subscribe(()=>{
      this.getMessages();
    });
    this.showAlert('Mensaje eliminado', 'rgb(23, 191, 99)');
  }

  // Show alert with title and background color
  showAlert(title, bgColor){
    const Toast = Swal.mixin({
      toast: true,
      position: 'bottom',
      showConfirmButton: false,
      timerProgressBar: false,
      timer: 2500
    });

    Toast.fire({
      title: title,
      background: bgColor,
    });
  }

}
