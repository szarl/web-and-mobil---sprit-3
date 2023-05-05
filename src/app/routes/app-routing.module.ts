import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from 'src/app/pages/homepage/homepage.component';
import { StudentComponent } from 'src/app/pages/student/student.component';
import { UniversitiesComponent } from 'src/app/pages/universities/universities.component';
import { ApartmentComponent } from 'src/app/pages/apartment/apartment.component';
import { Country } from 'src/app/pages/country/Country';
import { ApartmentsComponent } from 'src/app/pages/apartments/apartments.component';
import { UserLoginComponent } from 'src/app/pages/user-login/user-login.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'student', component: StudentComponent },
  { path: 'universities', component: UniversitiesComponent },
  { path: 'apartments', component: ApartmentsComponent },

  { path: 'apartment/:id', component: ApartmentComponent },
  { path: 'country', component: Country },
  { path: 'user-login', component: UserLoginComponent },
  { path: 'homepage', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
