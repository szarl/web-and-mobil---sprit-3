import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-universities',
  templateUrl: './universities.component.html',
  styleUrls: ['./universities.component.scss'],
})
export class UniversitiesComponent implements OnInit {
  universities: any[] = [];
  displayedUniversities: any[] = [];
  itemsPerPage = 4;
  currentPage = 1;
  searchInput: string = '';

  constructor(private db: AngularFireDatabase) {}

  ngOnInit() {
    this.db
      .list('universities')
      .valueChanges()
      .subscribe((universities) => {
        this.universities = universities;
        this.updateDisplayedUniversities();
      });
  }

  updateDisplayedUniversities() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.displayedUniversities = this.universities
      .filter((university) =>
        university.address
          .toLowerCase()
          .includes(this.searchInput.toLowerCase())
      )
      .slice(start, end);
  }

  nextPage() {
    if (this.currentPage * this.itemsPerPage < this.universities.length) {
      this.currentPage++;
      this.updateDisplayedUniversities();
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateDisplayedUniversities();
    }
  }

  onSearchChange() {
    this.currentPage = 1; // Reset to first page when search changes
    this.updateDisplayedUniversities();
  }
}
