import { boot } from 'quasar/wrappers';
import { LocalStorage, Dark } from 'quasar';

export default boot(({ app }) => {
  // console.log('initialization........ ');
  const darkMode = LocalStorage.getItem('darkMode');
  Dark.set(darkMode);
});
