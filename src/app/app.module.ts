import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects'
import { reducers } from './store/store';
import { TodoEffect } from './store/effects/todo.effect';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([TodoEffect])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
