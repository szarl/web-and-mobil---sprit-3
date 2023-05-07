import { AngularFireDatabase } from '@angular/fire/compat/database';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Component } from '@angular/core';

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.scss'],
})
export class ApartmentComponent {
  apartment$: Observable<any>;

  constructor(private db: AngularFireDatabase, private route: ActivatedRoute) {
    const apartmentId = this.route.snapshot.paramMap.get('id');
    this.apartment$ = this.db
      .object(`apartments/${apartmentId}`)
      .valueChanges();
  }
}
