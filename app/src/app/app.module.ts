import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MenuComponent } from './menu/menu.component';
import { WhatsAppComponent } from './whatsapp/whatsapp.component';


@NgModule({
  declarations: [
    AppComponent, MenuComponent, WhatsAppComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    FontAwesomeModule, ToastrModule.forRoot(),
    FormsModule, ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }