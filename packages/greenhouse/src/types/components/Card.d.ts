import { SvelteComponentTyped } from 'svelte';

export interface CardProps {
  title: string;
  comfySides?: boolean;
}

export default class Card extends SvelteComponentTyped<CardProps> {}
