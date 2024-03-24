import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitComponent } from './modules/init/init.component';
import { ListCarComponent } from './modules/list-car/list-car.component';

@NgModule({
  declarations: [
    AppComponent,
    InitComponent,
    ListCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
