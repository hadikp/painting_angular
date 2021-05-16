import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AkvarellComponent } from './pages/akvarell/akvarell.component';
import { CeruzarajzComponent } from './pages/ceruzarajz/ceruzarajz.component';
import { HomeComponent } from './pages/home/home.component';
import { KapcsolatComponent } from './pages/kapcsolat/kapcsolat.component';
import { OlajfestmenyComponent } from './pages/olajfestmeny/olajfestmeny.component';
import { PastelrajzComponent } from './pages/pastelrajz/pastelrajz.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'ceruza', component: CeruzarajzComponent},
  {path: 'pastel', component: PastelrajzComponent},
  {path: 'akvarell', component: AkvarellComponent},
  {path: 'olaj', component: OlajfestmenyComponent},
  {path: 'kapcsolat', component: KapcsolatComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
