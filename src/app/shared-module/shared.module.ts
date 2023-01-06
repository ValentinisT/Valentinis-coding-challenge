import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersApiService } from '../services/users-api.service';
import { LoginService } from '../services/login.service';
import { AuthGuard } from '../guard/can-deactivate-guard';

@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    HttpClientModule,
  ],
  exports: [
    HttpClientModule,
    FormsModule
  ],
  providers: [LoginService, UsersApiService, AuthGuard],
})
export class SharedModule { }
