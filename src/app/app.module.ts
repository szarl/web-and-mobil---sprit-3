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
import { environment } from '../environment/environment';
import { FormsModule } from '@angular/forms';

// Import AngularFire modules
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

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
    AngularFireModule.initializeApp(environment.firebaseConfig), // Add this line
    AngularFireDatabaseModule, // Add this line
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
