import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './view/login/login.component';
import { DisplayComponent } from './view/display/display.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServicesService } from './services.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DisplayComponent,
    
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [ServicesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
