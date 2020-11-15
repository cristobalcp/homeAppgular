import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio.component';
import { ModalsComponent } from './modals.component';
import { MatIconModule } from '@angular/material/icon';
import { PipesModule } from '../../pipes/pipes/pipes.module';


@NgModule({
  declarations: [InicioComponent, ModalsComponent],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MatIconModule,
    PipesModule
  ]
})
export class InicioModule { }
