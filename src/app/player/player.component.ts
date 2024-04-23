import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../models/player.model';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit{
  @Input() player!: Player;

  firstName!: String;
  lastName!: String;
  team!:String;
  poste!: String;
  price!: number;
  points!: number;
  rebonds!: number;
  assist!: number;
  interceptions!: number;
  contres!: number;
  minutesEnJeux!: number;
  pourcentageJoues!: number;
  blesse?: Boolean;
  imageBlesse?: String;

  ngOnInit(){  
    // this.firstName = 'Luka';
    // this.lastName = 'Doncic';
    // this.team = 'DAL';
    // this.poste = 'F';
    // this.price = 32;
    // this.points = 36,6;
    // this.rebonds = 9;
    // this.assist = 9,8;
    // this.interceptions = 1,4;
    // this.contres = 0,6;
    // this.minutesEnJeux = 37,6;
    // this.pourcentageJoues = 87;
    // this.blesse = true;
    // this.imageBlesse = '../assets/img/pansement.png';
  }
}