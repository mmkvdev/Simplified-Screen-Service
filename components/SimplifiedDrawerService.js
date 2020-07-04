import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import AttendAtHomeStackDrawer from '../stackdrawers/AttendAtHomeStackDrawer';
import UploadStackDrawer from '../stackdrawers/UploadStackDrawer';
import CallMeScreenStackDrawer from '../stackdrawers/CallMeScreenStackDrawer';



const SimplifiedDrawerService = () => {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="CallMeScreen">
        <Drawer.Screen name="CallMeScreen" component={CallMeScreenStackDrawer} />
        <Drawer.Screen name="AttendAtHomeScreen" component={AttendAtHomeStackDrawer} />
        <Drawer.Screen name="UploadScreen" component={UploadStackDrawer} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default SimplifiedDrawerService;