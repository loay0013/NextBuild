import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GraphicsPage } from './graphics.page';

const routes: Routes = [
  {
    path: '',
    component: GraphicsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GraphicsPageRoutingModule {}
