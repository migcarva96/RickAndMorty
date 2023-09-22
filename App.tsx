import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import {ContainerStackNavigation} from './src/ui/navigations/ContainerStackNavigation';

export const App = () => {
  return (
    <NavigationContainer>
      <ContainerStackNavigation />
    </NavigationContainer>
  );
};
