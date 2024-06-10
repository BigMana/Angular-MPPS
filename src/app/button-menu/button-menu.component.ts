import { Component, OnInit, Input} from '@angular/core';
import { ButtonMenu } from '../models/button-menu.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-button-menu',
  templateUrl: './button-menu.component.html',
  styleUrls: ['./button-menu.component.scss']
})
export class MenuComponent implements OnInit{
  @Input() buttonMenu!: ButtonMenu;
  
  name!: String;
  link!: String;
  imageUrl!: String;

    ngOnInit(){  
      // this.name = 'Coach Room';
      // this.link = 'coach-room';
      // this.imageUrl = 'assets/img/menu/coachRoomButton.jpg';
  }
}

export { ButtonMenu };
