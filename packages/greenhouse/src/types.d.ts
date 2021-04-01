import SvelteComponentDev from '*.svelte';

declare namespace StorybookSvelte {
  type Component = {
    Component: Partial<SvelteComponentDev>;
    props?: Record<string, unknown>;
  };
}
