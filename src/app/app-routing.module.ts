import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComunicacionComponent } from './componentes/comunicacion/comunicacion.component';
import { PaisesComponent } from './componentes/paises/paises.component';


const routes: Routes = [
  {path:'comunicacion', component:ComunicacionComponent},
  {path:'paises', component:PaisesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
