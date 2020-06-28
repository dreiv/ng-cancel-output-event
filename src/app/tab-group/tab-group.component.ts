import {
  Component,
  ContentChildren,
  QueryList,
  TemplateRef,
  AfterContentInit,
  EventEmitter,
  Output
} from '@angular/core';

import { TabComponent } from './tab/tab.component';

export interface TabActivateArgs {
  cancel: boolean;
}

@Component({
  selector: 'app-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.scss']
})
export class TabGroupComponent implements AfterContentInit {

  @ContentChildren(TabComponent)
  tabComponents!: QueryList<TabComponent>;

  _selectedTabTemplateRef!: TemplateRef<any>;

  _selectedTab!: TabComponent;

  @Output()
  canTabActivate = new EventEmitter<TabActivateArgs>();

  ngAfterContentInit(): void {
    this._setTab(this.tabComponents.first);
  }

  _onSelectTab(tab: TabComponent): void {
    const activateArgs = { cancel: false };

    this.canTabActivate.emit(activateArgs);

    if (!activateArgs.cancel) {
      this._setTab(tab);
    }
  }

  private _setTab(tab: TabComponent): void {
    this._selectedTab = tab;
    this._selectedTabTemplateRef = tab.tabContentTemplateRef;
  }

}
