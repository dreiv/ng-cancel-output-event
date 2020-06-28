import {
  Component,
  Input,
  ViewChild,
  TemplateRef
} from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html'
})
export class TabComponent {
  @Input()
  label!: string;

  @ViewChild('tabContent', {static: true})
  tabContentTemplateRef!: TemplateRef<any>

}
