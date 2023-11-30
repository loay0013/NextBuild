import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MultitaskPageRoutingModule } from './multitask-routing.module';

import { MultitaskPage } from './multitask.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MultitaskPageRoutingModule
  ],
  declarations: [MultitaskPage]
})
export class MultitaskPageModule {}
