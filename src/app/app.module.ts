import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { CoachComponent } from './coach/coach.component';
import { DraftComponent } from './draft/draft.component';
import { CoachRoomComponent } from './coach-room/coach-room.component';
import { TitleMppsComponent } from './title-mpps/title-mpps.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MenuComponent } from './menu/menu.component';
import { ButtonMenu } from './button-menu/button-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    CoachComponent,
    DraftComponent,
    CoachRoomComponent,
    TitleMppsComponent,
    LandingPageComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
