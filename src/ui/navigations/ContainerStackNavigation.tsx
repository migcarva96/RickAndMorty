import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Character} from '../../model/entities/CharactersResponse';
import {DetailsScreen} from '../details/DetailsScreen';
import {HomeScreen} from '../home/HomeScreen';

export type ContainerRootStackParams = {
  HomeScreen: undefined;
  DetailsScreen: {character: Character};
};

const Stack = createStackNavigator<ContainerRootStackParams>();

export const ContainerStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
    </Stack.Navigator>
  );
};
