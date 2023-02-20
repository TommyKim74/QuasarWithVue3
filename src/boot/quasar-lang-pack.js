import { boot } from 'quasar/wrappers';
import { Quasar, LocalStorage } from 'quasar';

export default boot(({ app }) => {
  const val = LocalStorage.getItem('lang');

  // console.log('boot lang : ', val);

  import(`../../node_modules/quasar/lang/${val}.mjs`).then(lang => {
    Quasar.lang.set(lang.default);
  });
});
