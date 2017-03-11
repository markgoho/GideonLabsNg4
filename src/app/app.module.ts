import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { WordPressModule } from 'ng2-wp-api';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from "./app-routing.module";
import { SpecificationsComponent } from "./specifications/specifications.component";

export function photonOptions() {
  return [
    { 'key': 'large', 'value': { w: 800, h: 360 } },
    { 'key': 'cropped', 'value': { crop: "160px,25,1400px,60" } },
    { 'key': 'resized', 'value': { resize: "400,220" } }
  ]
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SpecificationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    WordPressModule.forRoot('https://www.gideonlabs.com', photonOptions(), true),
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
