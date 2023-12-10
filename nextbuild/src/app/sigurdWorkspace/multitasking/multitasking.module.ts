import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MultitaskingPageRoutingModule } from './multitasking-routing.module';

import { MultitaskingPage } from './multitasking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MultitaskingPageRoutingModule
  ],
  declarations: [MultitaskingPage]
})
export class MultitaskingPageModule {}
