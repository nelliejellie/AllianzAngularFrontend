import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingscreenComponent } from './landingscreen/landingscreen.component';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { HeadercomponentComponent } from './headercomponent/headercomponent.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { Angular4PaystackModule } from 'angular4-paystack';

@NgModule({
  declarations: [
    AppComponent,
    LandingscreenComponent,
    HomescreenComponent,
    HeadercomponentComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Angular4PaystackModule.forRoot('pk_test_70c936bbe57c77727e27a3d36be0fcae769eab3b')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
