import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MultitaskPage } from './multitask.page';

const routes: Routes = [
  {
    path: '',
    component: MultitaskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MultitaskPageRoutingModule {}
