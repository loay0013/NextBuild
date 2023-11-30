import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameChoicePage } from './game-choice.page';

const routes: Routes = [
  {
    path: '',
    component: GameChoicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameChoicePageRoutingModule {}
