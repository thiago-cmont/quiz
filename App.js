if (__DEV__) {
  import('./src/config/ReactotronConfig');
}
import 'react-native-gesture-handler';
import * as React from 'react';
import {Provider} from 'react-redux';
import store from './src/store';

import TestSas from './src/navigations/index';

const App = () => {
  return (
    <Provider store={store}>
      <TestSas />
    </Provider>
  );
};

export default App;
