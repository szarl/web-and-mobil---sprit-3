import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { map } from 'rxjs/operators';
@Component({
  selector: 'app-country',
  templateUrl: './country.html',
  styleUrls: ['./country.scss'],
})
export class Country {
  countries$: Observable<any[]>;
  displayedCountries: any[] = [];
  currentPage: number = 1;
  pageSize: number = 6;
  searchInput: string = '';

  constructor(private db: AngularFireDatabase) {
    this.countries$ = this.db
      .list('countries')
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => {
            const data: unknown = c.payload.val();
            const key = c.payload.key;
            return typeof data === 'object' && data !== null
              ? { key, ...(data as Record<string, unknown>) }
              : { key };
          })
        )
      );
    this.countries$.subscribe((countries) => {
      this.displayedCountries = countries.slice(0, this.pageSize);
    });
  }

  changePage(newPage: number) {
    const startIndex = (newPage - 1) * this.pageSize;
    const endIndex = newPage * this.pageSize;
    this.currentPage = newPage;
    this.countries$.subscribe((countries) => {
      this.displayedCountries = countries.slice(startIndex, endIndex);
    });
  }

  searchCountry() {
    this.countries$.subscribe((countries) => {
      this.displayedCountries = countries.filter((country) =>
        country.name.includes(this.searchInput)
      );
    });
  }
}
