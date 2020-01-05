/* eslint-disable react-native/no-color-literals */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NmeaConnectorProvider } from './src/contexts/nmeaConnectorContext/nmeaConnectorContext';
import MainView from './src/MainView/MainView';
import { PositionProvider } from './src/contexts/positionContext/positionContext';
import { UnitProvider } from './src/contexts/unitContext/unitContext';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default function App() {
    return (
        <NmeaConnectorProvider>
            <PositionProvider>
                <UnitProvider>
                    <View style={styles.container}>
                        <MainView />
                    </View>
                </UnitProvider>
            </PositionProvider>
        </NmeaConnectorProvider>
    );
}
