import React from 'react';
import { View } from 'react-native';
import SimplifiedDrawerService from './components/SimplifiedDrawerService';
import CallMeScreen from './components/CallMeScreen';
import CallMeScreenStackDrawer from './stackdrawers/CallMeScreenStackDrawer';

export default function App() {
  return (
    <View>
      <SimplifiedDrawerService />
    </View>
  );
}
