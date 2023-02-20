import { boot } from 'quasar/wrappers';
import { LoadingBar } from 'quasar';

export default boot(({ app }) => {
  LoadingBar.setDefaults({
    color: 'primary',
    size: '8px',
    position: 'bottom',
  });
});
