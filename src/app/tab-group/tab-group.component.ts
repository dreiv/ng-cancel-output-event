import {
  Component,
  ContentChildren,
  QueryList,
  TemplateRef,
  AfterContentInit
} from '@angular/core';

import { TabComponent } from './tab/tab.component';

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

  ngAfterContentInit(): void {
    this._setTab(this.tabComponents.first);
  }

  _onSelectTab(tab: TabComponent): void {
    this._setTab(tab);
  }

  private _setTab(tab: TabComponent): void {
    this._selectedTab = tab;
    this._selectedTabTemplateRef = tab.tabContentTemplateRef;
  }

}
