import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CeruzarajzComponent } from './pages/ceruzarajz/ceruzarajz.component';
import { PastelrajzComponent } from './pages/pastelrajz/pastelrajz.component';
import { AkvarellComponent } from './pages/akvarell/akvarell.component';
import { OlajfestmenyComponent } from './pages/olajfestmeny/olajfestmeny.component';
import { KapcsolatComponent } from './pages/kapcsolat/kapcsolat.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CeruzarajzComponent,
    PastelrajzComponent,
    AkvarellComponent,
    OlajfestmenyComponent,
    KapcsolatComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
