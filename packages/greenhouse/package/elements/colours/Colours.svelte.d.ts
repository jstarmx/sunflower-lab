/** @typedef {typeof __propDef.props}  ColoursProps */
/** @typedef {typeof __propDef.events}  ColoursEvents */
/** @typedef {typeof __propDef.slots}  ColoursSlots */
export default class Colours extends SvelteComponentTyped<
  {},
  {
    [evt: string]: CustomEvent<any>;
  },
  {}
> {}
export type ColoursProps = typeof __propDef.props;
export type ColoursEvents = typeof __propDef.events;
export type ColoursSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from 'svelte';
declare const __propDef: {
  props: {};
  events: {
    [evt: string]: CustomEvent<any>;
  };
  slots: {};
};
export {};
