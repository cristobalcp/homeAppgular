import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { AboutMeService } from 'src/app/services/about-me.service';

declare let $: any;

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styles: [
  ]
})
export class ModalsComponent implements OnInit {

  techUser : string[] = [];
  aboutMe : any;

  constructor(public modalService: ModalService,
    private aboutMeService: AboutMeService) { }

  ngOnInit(): void {
    this.aboutMeService.getTech()
      .subscribe((res: any) => {
        if(!res.ok) return;
        this.techUser.push(...res.tech);
      });

      this.aboutMeService.getAboutMe()
      .subscribe((res: any) => {
        if(!res.ok) return;
        this.aboutMe = res.aboutMe;
      });
  }

  pagina1() {
    this.modalService.pagina1();
  }
  pagina2() {
    this.modalService.pagina2();
  }
  pagina3() {
    this.modalService.pagina3();
  }

  cerrarTec() {
    this.modalService.cerrarTec();
  }
  cerrarSobreMi() {
    this.modalService.cerrarSobreMi();
  }
}
