import { SharedModule } from 'src/app/shared-module/shared.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UsersApiService } from './services/users-api.service';
import { LoginService } from './services/login.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/other/header/app-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [LoginService, UsersApiService],
  bootstrap: [AppComponent],
})
export class AppModule { }
