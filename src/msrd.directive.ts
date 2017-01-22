import { Directive, Input, HostBinding } from '@angular/core';
import { whitespaceScale, clrs, typeScale, fontWeights, lineHeights,
} from './config';
import { getSpacingTop, getSpacingRight, getSpacingBottom, getSpacingLeft,
} from './utils';

@Directive({
  selector: `
    [ma], [mh], [mv], [mt], [mr], [mb], [ml],
    [pa], [ph], [pv], [pt], [pr], [pb], [pl],
    [clr], [bg], [f], [fw], [lh]
  `
})
export class MsrdDirective {
  // Margins
  @Input() ma;
  @Input() mh;
  @Input() mv;
  @Input() mt;
  @Input() mr;
  @Input() mb;
  @Input() ml;

  @HostBinding('style.margin-top')
  get marginTop(): string {
    return getSpacingTop('m', this);
  }

  @HostBinding('style.margin-right')
  get marginRight() {
    return getSpacingRight('m', this);
  }

  @HostBinding('style.margin-bottom')
  get marginBottom() {
    return getSpacingBottom('m', this);
  }

  @HostBinding('style.margin-left')
  get marginLeft() {
    return getSpacingLeft('m', this);
  }

  // Paddings
  @Input() pa;
  @Input() ph;
  @Input() pv;
  @Input() pt;
  @Input() pr;
  @Input() pb;
  @Input() pl;

  @HostBinding('style.padding-top')
  get paddingTop(): string {
    return getSpacingTop('p', this);
  }

  @HostBinding('style.padding-right')
  get paddingRight() {
    return getSpacingRight('p', this);
  }

  @HostBinding('style.padding-bottom')
  get paddingBottom() {
    return getSpacingBottom('p', this);
  }

  @HostBinding('style.padding-left')
  get paddingLeft() {
    return getSpacingLeft('p', this);
  }

  // Colours
  @Input() clr;
  @Input() bg;

  @HostBinding('style.color')
  get fontColor() {
    return clrs[this.clr];
  };

  @HostBinding('style.background-color')
  get backgroundColor() {
    return clrs[this.bg];
  };

  // Typography
  @Input() f;
  @Input() fw;
  @Input() lh;

  @HostBinding('style.font-size')
  get fontSize() {
    return typeScale[this.f];
  };

  @HostBinding('style.font-weight')
  get fontWeight() {
    return fontWeights[this.fw];
  };

  @HostBinding('style.line-height')
  get lineHeight() {
    return lineHeights[this.lh];
  };
}
