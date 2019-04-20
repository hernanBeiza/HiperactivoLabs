import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MenuComponent } from './menu/menu.component';
import { WhatsAppComponent } from './whatsapp/whatsapp.component';

@NgModule({
  declarations: [
    AppComponent, MenuComponent, WhatsAppComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule, 
    FormsModule, ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }