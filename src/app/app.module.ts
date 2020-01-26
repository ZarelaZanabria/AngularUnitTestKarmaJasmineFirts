import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OperatorWithNumberComponent } from './operator-with-number/operator-with-number.component';
import { DomComponent } from './dom/dom.component';

@NgModule({
  declarations: [
    AppComponent,
    OperatorWithNumberComponent,
    DomComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
