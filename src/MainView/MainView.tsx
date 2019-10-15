/* eslint-disable  */
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useNmea } from '../contexts/nmeaContext/nmeaContext';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    connectionString: {
        fontWeight: "700",
        fontSize: 16
    }
});

export default function MainView() {
    const nmea = useNmea();
    return (
        <View style={styles.container}>
            <Text style={styles.connectionString}>{`Connected: ${nmea.state.connected}`}</Text>
            <Text>Data: {JSON.stringify(nmea.state.data)}</Text>
        </View>
    );
}

