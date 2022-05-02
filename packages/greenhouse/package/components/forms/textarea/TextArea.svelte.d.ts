/** @typedef {typeof __propDef.props}  TextAreaProps */
/** @typedef {typeof __propDef.events}  TextAreaEvents */
/** @typedef {typeof __propDef.slots}  TextAreaSlots */
export default class TextArea extends SvelteComponentTyped<
  {
    label?: string;
    placeholder?: string;
    value?: string;
    rows?: number;
  },
  {
    [evt: string]: CustomEvent<any>;
  },
  {}
> {}
export type TextAreaProps = typeof __propDef.props;
export type TextAreaEvents = typeof __propDef.events;
export type TextAreaSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from 'svelte';
declare const __propDef: {
  props: {
    label?: string;
    placeholder?: string;
    value?: string;
    rows?: number;
  };
  events: {
    [evt: string]: CustomEvent<any>;
  };
  slots: {};
};
export {};
