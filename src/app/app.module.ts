import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [AppComponent, RegisterComponent, UserListComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
