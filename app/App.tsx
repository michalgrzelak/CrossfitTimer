import React from 'react';
import {AppComponent} from './AppComponent';
import {Provider} from 'react-redux';
import {store} from './store';

const App = () => {
  return (
    <Provider store={store}>
      <AppComponent />
    </Provider>
  );
};

export default App;
