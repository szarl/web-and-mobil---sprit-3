import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.scss'],
})
export class ApartmentsComponent implements OnInit {
  apartments: any[] = [];
  displayedApartments: any[] = [];
  currentPage: number = 1;
  pageSize: number = 6;

  constructor(private db: AngularFireDatabase) {}

  ngOnInit() {
    this.db
      .list('apartments')
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({
            key: c.payload.key,
            ...(c.payload.val() as any),
          }))
        )
      )
      .subscribe((apartments) => {
        this.apartments = apartments;
        this.displayedApartments = apartments.slice(0, this.pageSize);
      });
  }

  changePage(newPage: number) {
    const startIndex = (newPage - 1) * this.pageSize;
    const endIndex = newPage * this.pageSize;
    this.currentPage = newPage;
    this.displayedApartments = this.apartments.slice(startIndex, endIndex);
  }
}
