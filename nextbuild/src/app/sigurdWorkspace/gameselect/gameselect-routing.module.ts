import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameselectPage } from './gameselect.page';

const routes: Routes = [
  {
    path: '',
    component: GameselectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameselectPageRoutingModule {}
