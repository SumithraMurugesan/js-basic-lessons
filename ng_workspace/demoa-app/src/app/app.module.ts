import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppHeaderComponent } from './app.header.component';
import { BoxaComponent } from './boxa/boxa.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CountDisplayComponentComponent } from './count-display-component/count-display-component.component';
import { HitComponentComponent } from './hit-component/hit-component.component';
import { CounterAppComponent } from './counter-app/counter-app.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppHeaderComponent,
    BoxaComponent,
    CustomerFormComponent,
    CountDisplayComponentComponent,
    HitComponentComponent,
    CounterAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppHeaderComponent, AppComponent, HomeComponent]
})
export class AppModule { }
