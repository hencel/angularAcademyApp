import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SearchRoutingModule } from './search/search-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AutocompleteComponent } from './search/autocomplete/autocomplete.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    AutocompleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SearchRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
