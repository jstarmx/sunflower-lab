import { SvelteComponentTyped } from 'svelte';

export interface CardProps {
  title: string;
}

export default class Card extends SvelteComponentTyped<CardProps> {}
