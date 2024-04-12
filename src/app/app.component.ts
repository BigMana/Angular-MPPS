import { Component, OnInit } from '@angular/core';
import { Coach } from './models/coach.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  myCoach!: Coach;

  my2Coach!: Coach;
  my3Coach!: Coach;
  my4Coach!: Coach;
  my5Coach!: Coach;
  my6Coach!: Coach;

  ngOnInit() {
    this.myCoach = new Coach(
      'Romain',
      'Cadot',
      'ROM1',
      '../assets/img/mais.jpg'
    );
    this.my2Coach = new Coach(
      'XMAN',
      'Cadot',
      'XMAN',
      '../assets/img/cuistot.jpg'
    );
    this.my3Coach = new Coach(
      'NICO',
      'Cadot',
      'NICO',
      '../assets/img/king.jpg'
    );
    this.my4Coach = new Coach(
      'SEB',
      'Cadot',
      'SEB',
      '../assets/img/fauteuil-roulant.jpg'
    );
    this.my5Coach = new Coach(
      'JULEL',
      'Cadot',
      'JULEL',
      '../assets/img/tortue.jpg'
    );
    this.my6Coach = new Coach(
      'Showtime',
      'Coach',
      'COACH',
      '../assets/img/brain.jpg'
    );
  }
}
