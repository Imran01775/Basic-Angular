import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserInfoRoutingModule } from './user-info/user-info-routing.module';
import { UserInfoModule } from './user-info/user-info.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserInfoRoutingModule,
    ReactiveFormsModule,
    UserInfoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
