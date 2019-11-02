import * as sapper from '@sapper/app';
import '@sunflower-lab/greenhouse/src/styles/vars.css';
import '@sunflower-lab/greenhouse/src/styles/global.css';

sapper.start({
  target: document.querySelector('#sapper'),
});
