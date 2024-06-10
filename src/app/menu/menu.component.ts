import { Component, OnInit} from '@angular/core';
import { ButtonMenu } from '../models/button-menu.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{

  buttonMenus!: ButtonMenu[];
  ngOnInit() {
    this.buttonMenus = [
      // {
      // name: 'Coach Room',
      // link: 'coach-room',
      // imageUrl: 'assets/img/menu/coachRoomButton.jpg'
      // },
      {
      name: 'Coach Room',
      link: 'coach-room',
      imageUrl: 'assets/img/menu/coachRoomButton.jpg'
      }
    ]
}
}