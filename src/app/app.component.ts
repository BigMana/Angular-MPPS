import { Component, OnInit } from '@angular/core';
import { Player } from './models/player.model';
import { Coach } from './models/coach.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  coaches!: Coach[];
  players!: Player[];

  ngOnInit() {
    this.players = [
      {
        firstName: 'Luka',
        lastName: 'Doncic',
        team: 'DAL',
        poste: 'F',
        price: 32,
        points: 36.6,
        rebonds: 9,
        assist: 9.8,
        interceptions: 1.4,
        contres: 0.6,
        minutesEnJeux: 37.6,
        pourcentageJoues: 87,
        blesse: true,
        imageBlesse: 'assets/img/pansement.png'
      },
      {
        firstName: 'Luka',
        lastName: 'Doncic',
        team: 'DAL',
        poste: 'F',
        price: 32,
        points: 36.6,
        rebonds: 9,
        assist: 9.8,
        interceptions: 1.4,
        contres: 0.6,
        minutesEnJeux: 37.6,
        pourcentageJoues: 87,
        blesse: true,
        imageBlesse: 'assets/img/pansement.png'
      },
      {
        firstName: 'Davis',
        lastName: 'Anthony',
        team: 'LAL',
        poste: 'C',
        price: 25,
        points: 24.9,
        rebonds: 12.3,
        assist: 3.1,
        interceptions: 1.1,
        contres: 2.5,
        minutesEnJeux: 35.5,
        pourcentageJoues: 94,
        blesse: false,
        imageBlesse: 'assets/img/pansement.png'
      }
    ]
  }
}
