# msrd
Angular toolkit for building UI components with typography and layout scales

```ts
// Margins
@Input() ma;
@Input() mh;
@Input() mv;
@Input() mt;
@Input() mr;
@Input() mb;
@Input() ml;
// Padding
@Input() pa;
@Input() ph;
@Input() pv;
@Input() pt;
@Input() pr;
@Input() pb;
@Input() pl;
// Colours
@Input() clr;
@Input() bg;
// Typography
@Input() f;
@Input() fw;
@Input() lh;
```

### Example

```html
<a class="br3"
  f="6" fw="3"
  ph="3" pv="2" mb="2"
  clr="white" bg="purple"
  href="#0">
  Button Text
</a>
```
