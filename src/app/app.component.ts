import { Component } from '@angular/core';

import { TabActivateArgs } from './tab-group/tab-group.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isBlocked = false;

  _onCanTabActivate(args: TabActivateArgs): void {
    // logic to determine if tab switching should be cancelled
    args.cancel = this.isBlocked;
  }
}
