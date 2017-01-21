import { Directive, HostBinding, Input } from '@angular/core'
import { BaseComponent } from '../../../../../src';

@Directive({
  selector: 'p, span',
})
export class TextDirective extends BaseComponent {
  @Input() lh = 'copy';
}

@Directive({
  selector: 'h1, h2, h3, h4, h5, h6',
})
export class HeadingDirective extends BaseComponent {
  @Input() lh = 'title';
}
