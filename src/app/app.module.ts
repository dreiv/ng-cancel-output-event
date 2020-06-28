import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TabGroupModule } from './tab-group/tab-group.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    TabGroupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
