import { SvelteComponentTyped } from 'svelte';

export interface IconProps {
  /**
   * SVG path for the icon content
   */
  path: string;
  /**
   * Optional background colour to provide a solid colour circle behind the icon
   * @default ""
   */
  background?: 'black' | 'white';
}

export default class Icon extends SvelteComponentTyped<IconProps> {}
