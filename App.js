import React from 'react';
import { View, StatusBar, Text } from 'react-native';
import Navigation from './src/navigation';
import { Provider } from 'react-redux';
import { store } from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <Navigation />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}
