import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const SimplifiedDrawerService = () => {
    const SimplifiedDrawerService = createDrawerNavigator();
    return (
        <NavigationContainer>
            <SimplifiedDrawerService.Navigator>
                <SimplifiedDrawerService.Screen name="CallbackScreen"></SimplifiedDrawerService.Screen>
                <SimplifiedDrawerService.Screen name="AttendScreen"></SimplifiedDrawerService.Screen>
                <SimplifiedDrawerService.Screen name="UploadScreen"></SimplifiedDrawerService.Screen>
            </SimplifiedDrawerService.Navigator>
        </NavigationContainer>
    );
}

export default SimplifiedDrawerService;