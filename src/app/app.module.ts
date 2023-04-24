import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Apartment } from './pages/apartment/Apartment';
import { AppRoutingModule } from './routes/app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    Header,
    Footer,
    Apartment,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
