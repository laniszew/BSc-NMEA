/* eslint-disable react-native/no-color-literals */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NmeaProvider } from './src/contexts/nmeaContext/nmeaContext';
import MainView from './src/MainView/MainView';

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
        <NmeaProvider>
            <View style={styles.container}>
                <Text>Init</Text>
                <MainView />
            </View>
        </NmeaProvider>
    );
}
