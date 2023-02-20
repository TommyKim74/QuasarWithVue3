import { boot } from 'quasar/wrappers';
import { Loading } from 'quasar';

export default boot(({ app }) => {
  Loading.setDefaults({
    message: '로딩중....',
    spinnerSize: 50,
  });
});
