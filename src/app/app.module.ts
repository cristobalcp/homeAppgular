import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ModalsComponent } from './shared/modals/modals.component';

import { MaterialComponent } from './material.components';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// i18n
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { YoutubeComponent } from './components/youtube/youtube.component';


registerLocaleData(localeEs)

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ModalsComponent,
    YoutubeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MaterialComponent
  ],
  providers: [ HttpClientModule, 
    { provide: LOCALE_ID ,
      useValue: 'es'
    }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
