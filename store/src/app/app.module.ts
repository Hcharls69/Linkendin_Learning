import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConEstadoComponent } from './con-estado/con-estado.component';
import { SinEstadoComponent } from './sin-estado/sin-estado.component';

@NgModule({
  declarations: [
    AppComponent,
    ConEstadoComponent,
    SinEstadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
