import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitComponent } from './modules/init/init.component';
import { ListCarComponent } from './modules/list-car/list-car.component';
import { CarService } from './services/car-service.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InitComponent,
    ListCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // modulo para trabajar con apis
    FormsModule // modulo para trabajar con inputs(formulario)
  ],
  providers: [CarService], // por cada nuevo servicio se agrega a providers
  bootstrap: [AppComponent]
})
export class AppModule { }
