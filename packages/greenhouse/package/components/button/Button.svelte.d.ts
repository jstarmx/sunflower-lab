/** @typedef {typeof __propDef.props}  ButtonProps */
/** @typedef {typeof __propDef.events}  ButtonEvents */
/** @typedef {typeof __propDef.slots}  ButtonSlots */
export default class Button extends SvelteComponentTyped<
  {
    label?: string;
    mode?: string;
    href?: string;
    icon?: string;
    image?: string;
    imageHeight?: number;
    type?: string;
    iconRight?: boolean;
    fullWidth?: boolean;
    snug?: boolean;
  },
  {
    click: MouseEvent;
  } & {
    [evt: string]: CustomEvent<any>;
  },
  {}
> {}
export type ButtonProps = typeof __propDef.props;
export type ButtonEvents = typeof __propDef.events;
export type ButtonSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from 'svelte';
declare const __propDef: {
  props: {
    label?: string;
    mode?: string;
    href?: string;
    icon?: string;
    image?: string;
    imageHeight?: number;
    type?: string;
    iconRight?: boolean;
    fullWidth?: boolean;
    snug?: boolean;
  };
  events: {
    click: MouseEvent;
  } & {
    [evt: string]: CustomEvent<any>;
  };
  slots: {};
};
export {};
