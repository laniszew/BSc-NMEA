/* eslint-disable react-native/no-color-literals */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NmeaConnectorProvider } from './src/contexts/nmeaConnectorContext/nmeaConnectorContext';
import MainView from './src/MainView/MainView';
import { PositionProvider } from './src/contexts/positionContext/positionContext';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default function App() {
    return (
        <NmeaConnectorProvider>
            <PositionProvider>
            <View style={styles.container}>
                <Text>Init</Text>
                <MainView />
            </View>
            </PositionProvider>
        </NmeaConnectorProvider>
    );
}
