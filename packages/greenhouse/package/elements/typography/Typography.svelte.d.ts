/** @typedef {typeof __propDef.props}  TypographyProps */
/** @typedef {typeof __propDef.events}  TypographyEvents */
/** @typedef {typeof __propDef.slots}  TypographySlots */
export default class Typography extends SvelteComponentTyped<
  {},
  {
    [evt: string]: CustomEvent<any>;
  },
  {}
> {}
export type TypographyProps = typeof __propDef.props;
export type TypographyEvents = typeof __propDef.events;
export type TypographySlots = typeof __propDef.slots;
import { SvelteComponentTyped } from 'svelte';
declare const __propDef: {
  props: {};
  events: {
    [evt: string]: CustomEvent<any>;
  };
  slots: {};
};
export {};
