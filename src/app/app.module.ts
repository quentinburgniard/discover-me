import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { HeaderComponent } from './header/header.component';
import { StravaComponent } from './strava/strava.component';

@NgModule({
  declarations: [
    AppComponent,
    WidgetsComponent,
    HeaderComponent,
    StravaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
