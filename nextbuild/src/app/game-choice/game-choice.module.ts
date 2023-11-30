import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GameChoicePageRoutingModule } from './game-choice-routing.module';

import { GameChoicePage } from './game-choice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GameChoicePageRoutingModule
  ],
  declarations: [GameChoicePage]
})
export class GameChoicePageModule {}
