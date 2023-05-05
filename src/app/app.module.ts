import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { AppRoutingModule } from './routes/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { StudentComponent } from './pages/student/student.component';
import { UniversitiesComponent } from './pages/universities/universities.component';
import { UserLoginComponent } from './pages/user-login/user-login.component';
import { MenuComponent } from './menu/menu.component';
import { ApartmentComponent } from './pages/apartment/apartment.component';
import { Country } from './pages/country/Country';
import { ApartmentsComponent } from './pages/apartments/apartments.component';



@NgModule({
  declarations: [
    AppComponent,
    Header,
    Footer,
    HomepageComponent,
    StudentComponent,
    UniversitiesComponent,
    UserLoginComponent,
    MenuComponent,
    ApartmentComponent,
    Country,
    ApartmentsComponent,
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
