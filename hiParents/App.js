import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import ChildList from './src/components/cards/ChildList';
import Test from './src/components/modal/ManageChild';
import AppStack from './src/navigation/AppStack';
import storeRedux from './src/redux/store';

const App = () => {
  return (
    <Provider store={storeRedux}>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
