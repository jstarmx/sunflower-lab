/** @typedef {typeof __propDef.props}  InputProps */
/** @typedef {typeof __propDef.events}  InputEvents */
/** @typedef {typeof __propDef.slots}  InputSlots */
export default class Input extends SvelteComponentTyped<
  {
    label?: string;
    type?: string;
    placeholder?: string;
    value?: string;
  },
  {
    [evt: string]: CustomEvent<any>;
  },
  {}
> {}
export type InputProps = typeof __propDef.props;
export type InputEvents = typeof __propDef.events;
export type InputSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from 'svelte';
declare const __propDef: {
  props: {
    label?: string;
    type?: string;
    placeholder?: string;
    value?: string;
  };
  events: {
    [evt: string]: CustomEvent<any>;
  };
  slots: {};
};
export {};
