import { Component, OnInit, Input} from '@angular/core';
import { Coach } from '../models/coach.model';

@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.scss']
})
export class CoachComponent implements OnInit{
  @Input() coach!: Coach;
  
  firstName!: String;
  lastName!: String;
  nickName!: String;
  imageUrl!: String;

    ngOnInit(){  
      // this.firstName = 'Romain';
      // this.lastName = 'Cadot';
      // this.nickName = 'ROM1';
      // this.imageUrl = '../assets/img/mais.jpg';
  }
}