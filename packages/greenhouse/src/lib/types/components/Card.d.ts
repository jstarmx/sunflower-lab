import { SvelteComponentTyped } from 'svelte';

export interface CardProps {
  title: string;
  comfySides?: boolean;
  fill?: boolean;
}

export default class Card extends SvelteComponentTyped<CardProps> {}
