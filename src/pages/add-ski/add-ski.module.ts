import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddSkiPage } from './add-ski';

@NgModule({
  declarations: [
    AddSkiPage,
  ],
  imports: [
    IonicPageModule.forChild(AddSkiPage),
  ],
})
export class AddSkiPageModule {}
