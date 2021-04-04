import SvelteComponent from '*.svelte';

declare namespace StorybookSvelte {
  type Component = {
    Component: Partial<SvelteComponent>;
    props?: Record<string, unknown>;
  };
}
