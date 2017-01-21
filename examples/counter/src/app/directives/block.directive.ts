import { Directive, HostBinding, Input } from '@angular/core'
import { BaseComponent } from '../../../../../src';

@Directive({
  selector: 'div',
})
export class BlockDirective extends BaseComponent {
}
