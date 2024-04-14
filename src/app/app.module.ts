import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { CoachComponent } from './coach/coach.component';
import { DraftComponent } from './draft/draft.component';
import { CoachRoomComponent } from './coach-room/coach-room.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    CoachComponent,
    DraftComponent,
    CoachRoomComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
