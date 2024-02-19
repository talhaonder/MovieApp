import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import MainComponent from './MainComponent'; // Ana bileşeninizin dosyasını içe aktarın

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainComponent />
      </PersistGate>
    </Provider>
  );
};

export default App;