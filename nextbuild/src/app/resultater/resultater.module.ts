import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultaterPageRoutingModule } from './resultater-routing.module';

import { ResultaterPage } from './resultater.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultaterPageRoutingModule
  ],
  declarations: [ResultaterPage]
})
export class ResultaterPageModule {}
