import React from 'react';
import { View, StyleSheet } from 'react-native';

const ScreenLayout = (props) => {
    return <View style={{ ...styles.screen, ...props.style }}>{props.children}</View>
}

const styles = StyleSheet.create({
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
});

export default ScreenLayout;