import { Component } from '@angular/core';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.scss']
})
export class ApartmentsComponent {
  images = [
    {
      path: 'assets/apartments/apartment-1.jpg',
      alt: 'Apartment 1'
    },
    {
      path: 'assets/apartments/apartment-2.jpg',
      alt: 'Apartment 2'
    },
    {
      path: 'assets/apartments/apartment-3.jpg',
      alt: 'Apartment 3'
    },
    {
      path: 'assets/apartments/apartment-4.jpg',
      alt: 'Apartment 4'
    },
    {
      path: 'assets/apartments/apartment-5.jpg',
      alt: 'Apartment 5'
    },
    {
      path: 'assets/apartments/apartment-6.jpg',
      alt: 'Apartment 6'
    },
  ]}
