import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SSDChoicePage } from './ssdchoice.page';

const routes: Routes = [
  {
    path: '',
    component: SSDChoicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SSDChoicePageRoutingModule {}
