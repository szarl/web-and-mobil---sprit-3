import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { appartamentServcie } from 'src/app/service/AppartamentService';

@Component({
  imports: [CommonModule],
  selector: '.apartments',
  templateUrl: './apartments.html',
  styleUrls: ['./apartments.scss'],
  standalone: true,
})
export class Apartments implements OnInit {
  appartaments: any[] = [];

  async ngOnInit() {
    this.appartaments = await appartamentServcie.getAppartaments();
  }
}