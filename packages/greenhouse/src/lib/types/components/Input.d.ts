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
  /**
   * An optional error message to display
   */
  error?: string;
}

export default class Input extends SvelteComponentTyped<InputProps> {}
