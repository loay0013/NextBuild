import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SSDChoicePageRoutingModule } from './ssdchoice-routing.module';

import { SSDChoicePage } from './ssdchoice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SSDChoicePageRoutingModule
  ],
  declarations: [SSDChoicePage]
})
export class SSDChoicePageModule {}
