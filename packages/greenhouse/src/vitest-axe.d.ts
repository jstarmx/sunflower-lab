/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import 'vitest';
import type { AxeMatchers } from 'vitest-axe';

declare module 'vitest' {
  export interface Assertion<_T = any> extends AxeMatchers {}
  export interface AsymmetricMatchersContaining extends AxeMatchers {}
}
