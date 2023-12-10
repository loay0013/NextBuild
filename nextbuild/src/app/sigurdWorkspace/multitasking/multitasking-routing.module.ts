import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MultitaskingPage } from './multitasking.page';

const routes: Routes = [
  {
    path: '',
    component: MultitaskingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MultitaskingPageRoutingModule {}
