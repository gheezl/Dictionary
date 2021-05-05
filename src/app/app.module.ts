import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms"
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DictionaryInputComponent } from './components/dictionary-input/dictionary-input.component';
import { HeaderComponent } from './components/header/header.component';
import { WordDataComponent } from './components/word-data/word-data.component';

@NgModule({
  declarations: [
    AppComponent,
    DictionaryInputComponent,
    HeaderComponent,
    WordDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
