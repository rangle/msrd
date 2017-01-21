import { whitespaceScale } from './config';

type SpacingName = 'm' | 'p';
interface SpacingValues {
  ma?: string;
  mv?: string;
  mh?: string;
  mt?: string;
  mr?: string;
  mb?: string;
  ml?: string;
  pa?: string;
  pv?: string;
  ph?: string;
  pt?: string;
  pr?: string;
  pb?: string;
  pl?: string;
}

export function getSpacingTop(name: SpacingName, values: SpacingValues) {
  const {
    [`${name}t`]: t,
    [`${name}v`]: v,
    [`${name}a`]: a,
  } = values;

  if (t || v || a) {
    return whitespaceScale[t || v || a];
  }
}

export function getSpacingRight(name: SpacingName, values: SpacingValues) {
  const {
    [`${name}r`]: r,
    [`${name}h`]: h,
    [`${name}a`]: a,
  } = values;

  if (r || h || a) {
    return whitespaceScale[r || h || a];
  }
}

export function getSpacingBottom(name: SpacingName, values: SpacingValues) {
  const {
    [`${name}b`]: b,
    [`${name}v`]: v,
    [`${name}a`]: a,
  } = values;

  if (b || v || a) {
    return whitespaceScale[b || v || a];
  }
}

export function getSpacingLeft(name: SpacingName, values: SpacingValues) {
  const {
    [`${name}l`]: l,
    [`${name}h`]: h,
    [`${name}a`]: a,
  } = values;

  if (l || h || a) {
    return whitespaceScale[l || h || a];
  }
}
