import { SvelteComponentTyped } from 'svelte';

export interface InputProps {
  /**
   * Content for the <label> element that wraps the input element
   */
  label: string;
  /**
   * Placeholder for the input element
   */
  placeholder: string;
  /**
   * Bound value of the input element
   */
  value: string;
  /**
   * Type of input element
   * @default "text"
   */
  type?: 'text' | 'number' | 'email' | 'password';
}

export default class Input extends SvelteComponentTyped<
  InputProps,
  Record<string, unknown>,
  Record<string, unknown>
> {}
