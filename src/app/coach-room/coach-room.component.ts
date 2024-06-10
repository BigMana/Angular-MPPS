import { Component, OnInit } from '@angular/core';
import { Coach } from '../models/coach.model';

@Component({
  selector: 'app-coach-room',
  templateUrl: './coach-room.component.html',
  styleUrls: ['./coach-room.component.scss']
})
export class CoachRoomComponent implements OnInit{

  coaches!: Coach[];
  ngOnInit() {
    this.coaches = [
      {
        firstName: 'Romain',
        lastName: 'Cadot',
        nickName: 'ROM1',
        imageUrl: 'assets/img/tetesDeCoaches/mais.jpg'
      },
      {
        firstName: 'XMAN',
        lastName: 'Cadot',
        nickName: 'XMAN',
        imageUrl: 'assets/img/tetesDeCoaches/cuistot.jpg'
      },
      {
        firstName: 'NICO',
        lastName: 'Cadot',
        nickName: 'NICO',
        imageUrl: 'assets/img/tetesDeCoaches/king.jpg'
      },
      {
        firstName: 'SEB',
        lastName: 'Cadot',
        nickName: 'SEB',
        imageUrl: 'assets/img/tetesDeCoaches/fauteuil-roulant.jpg'
      },
      {
        firstName: 'JULEL',
        lastName: 'Cadot',
        nickName: 'JULEL',
        imageUrl: 'assets/img/tetesDeCoaches/tortue.jpg'
      },
      {
        firstName: 'Showtime',
        lastName: 'Coach',
        nickName: 'COACH',
        imageUrl: 'assets/img/tetesDeCoaches/brain.jpg'
      }
    ]
}
}