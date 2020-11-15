import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoticiaCompletaGuard } from '../app/guards/noticia-completa.guard';
import { LoginGuard } from '../app/guards/login.guard';

const routes: Routes = [
  {
    path: 'inicio', loadChildren: () =>
      import('./components/inicio/inicio.module').then(m => m.InicioModule )
  },
  {
    path: 'noticias', loadChildren: () =>
      import('./components/noticias/noticias.module').then(m =>  m.NoticiasModule )
  },
  {
    path: 'ajustes', loadChildren: () =>
      import('./components/ajustes/ajustes.module').then(m => m.AjustesModule ),
      canActivate: [LoginGuard]
  },
  {
    path: 'mensajes', loadChildren: () =>
      import('./components/mensajes/mensajes.module').then(m =>  m.MensajesModule ),
      canActivate: [LoginGuard]
  },
  {
    path: 'noticiaCompleta', loadChildren: () =>
      import('./components/noticia-completa/noticia-completa.module').then(m =>  m.NoticiaCompletaModule ),
      canActivate: [NoticiaCompletaGuard]
  },
  {
    path: 'youtube', loadChildren: () =>
      import('./components/youtube/youtube-routing.module').then(m =>  m.YoutubeRoutingModule ),
      canActivate: [LoginGuard]
  },
  { path: '', pathMatch: 'full', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
