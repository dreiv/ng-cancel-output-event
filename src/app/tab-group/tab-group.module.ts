import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabComponent } from './tab/tab.component';
import { TabGroupComponent } from './tab-group.component';

@NgModule({
  declarations: [
    TabComponent,
    TabGroupComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TabComponent,
    TabGroupComponent
  ]
})
export class TabGroupModule { }
