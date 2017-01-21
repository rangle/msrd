import { Directive, HostBinding } from '@angular/core'
import { BaseComponent } from '../../../../../src';

@Directive({
  selector: 'button, a',
  host: {
    class: 'link dim dib',
  },
})
export class ButtonDirective extends BaseComponent {
}
