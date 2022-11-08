import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConEstadoComponent } from './con-estado/con-estado.component';

const routes: Routes = [
  {path: '', component:ConEstadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
