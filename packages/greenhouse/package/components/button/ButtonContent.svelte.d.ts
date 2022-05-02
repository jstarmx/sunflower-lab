/** @typedef {typeof __propDef.props}  ButtonContentProps */
/** @typedef {typeof __propDef.events}  ButtonContentEvents */
/** @typedef {typeof __propDef.slots}  ButtonContentSlots */
export default class ButtonContent extends SvelteComponentTyped<
  {
    label: any;
    icon: any;
    image: any;
    imageHeight: any;
  },
  {
    [evt: string]: CustomEvent<any>;
  },
  {}
> {}
export type ButtonContentProps = typeof __propDef.props;
export type ButtonContentEvents = typeof __propDef.events;
export type ButtonContentSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from 'svelte';
declare const __propDef: {
  props: {
    label: any;
    icon: any;
    image: any;
    imageHeight: any;
  };
  events: {
    [evt: string]: CustomEvent<any>;
  };
  slots: {};
};
export {};
