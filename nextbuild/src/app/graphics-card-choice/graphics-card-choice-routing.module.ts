import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GraphicsCardChoicePage } from './graphics-card-choice.page';

const routes: Routes = [
  {
    path: '',
    component: GraphicsCardChoicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GraphicsCardChoicePageRoutingModule {}
