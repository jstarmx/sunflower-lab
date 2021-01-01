import { writable } from 'svelte/store';

import type { User, LovedOne, Companion, Memory, JsonValue } from './types';

const createWritableStore = <T extends JsonValue>(
  model: string,
  initial: T,
) => {
  const key = `forgetmenotapp_${model}`;
  const toString = (value: JsonValue) => JSON.stringify(value, null, 2);
  let saved = null;

  if (typeof localStorage !== 'undefined') {
    if (localStorage.getItem(key) === null) {
      localStorage.setItem(key, toString(initial));
    }

    saved = JSON.parse(localStorage.getItem(key));
  }

  const { subscribe, set, update } = writable(saved);

  return {
    subscribe,
    set: (value: JsonValue) => {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(key, toString(value));
      }
      return set(value);
    },
    update,
  };
};

export const user = createWritableStore<User>('user', {});
export const lovedOne = createWritableStore<LovedOne>('lovedOne', {});
export const companion = createWritableStore<Companion>('companion', {});
export const memory = createWritableStore<Memory>('memory', {});
