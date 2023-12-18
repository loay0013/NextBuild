import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultaterPage } from './resultater.page';

const routes: Routes = [
  {
    path: '',
    component: ResultaterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultaterPageRoutingModule {}
