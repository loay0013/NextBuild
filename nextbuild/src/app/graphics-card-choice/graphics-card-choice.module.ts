import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GraphicsCardChoicePageRoutingModule } from './graphics-card-choice-routing.module';

import { GraphicsCardChoicePage } from './graphics-card-choice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GraphicsCardChoicePageRoutingModule
  ],
  declarations: [GraphicsCardChoicePage]
})
export class GraphicsCardChoicePageModule {}
