import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';//para trabajar con forms
import{FormsModule} from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';//para hacer peticiones ajax
import { routing, appRoutingProviders } from './app.routing';

// impoorto clase routing


//componentes creados por mi
import { AppComponent } from './app.component';
import {LoginComponent } from './components/login/login.component';
import {RegisterComponent } from './components/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
