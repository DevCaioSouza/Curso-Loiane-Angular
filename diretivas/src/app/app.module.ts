import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
import { DiretivaNgswitchComponent } from './diretiva-ngswitch/diretiva-ngswitch.component';
import { DiretivaNgClassComponent } from './diretiva-ng-class/diretiva-ng-class.component';

@NgModule({
  declarations: [
    AppComponent,
    DiretivaNgifComponent,
    DiretivaNgswitchComponent,
    DiretivaNgClassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }