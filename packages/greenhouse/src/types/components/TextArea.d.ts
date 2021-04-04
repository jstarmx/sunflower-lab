import { SvelteComponentTyped } from 'svelte';

export interface TextAreaProps {
  /**
   * Content for the <label> element that wraps the TextArea element
   */
  label: string;
  /**
   * Placeholder for the TextArea element
   */
  placeholder: string;
  /**
   * Bound value of the TextArea element
   */
  value: string;
  /**
   * Number of rows of the TextArea element
   * @default 6
   */
  rows?: number;
}

export default class TextArea extends SvelteComponentTyped<TextAreaProps> {}
