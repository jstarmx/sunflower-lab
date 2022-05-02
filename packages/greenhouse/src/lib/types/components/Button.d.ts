import { SvelteComponentTyped } from 'svelte';

export interface ButtonProps {
  /**
   * Text label for the button
   */
  label?: string;
  /**
   * Specify a href to make the button an anchor element
   */
  href?: string;
  /**
   * Supply a SVG path for an icon
   */
  icon?: string;
  /**
   * Render the icon on the right hand side of the button
   * @default false
   */
  iconRight?: boolean;
  /**
   * Stretch the button horizontally to fill the available space
   * @default false
   */
  fullWidth?: boolean;
  /**
   * Remove the margin from the button to make it sit snugly next to adjacent elements
   * @default false
   */
  snug?: boolean;
  /**
   * Specify the type of the button
   * @default "primary"
   */
  mode?: 'primary' | 'secondary';
  /**
   * Specify the type of the button
   * @default "submit"
   */
  type?: 'submit' | 'button';
}

export default class Button extends SvelteComponentTyped<ButtonProps> {}
