/* eslint-disable  */
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useNmeaConnector } from '../contexts/nmeaConnectorContext/nmeaConnectorContext';
import { parseNmeaSentence } from '../parser/parser';

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
    const nmeaConnector = useNmeaConnector();
    const gga = "$GPGGA,093053.563,3510.75,S,13828.03,E,1,4,1.6,2.0,M,,,,*29\r\n";
    const ggl = "$GPGLL,3510.75,S,13828.02,E,211844.432,A*21";
    const gsa = "$GPGSA,A,3,8,11,15,22,,,,,,,,,2.3,2.2,1.5*0B";
    const mwv = "$WIMWV,216.4,T,35.0,N,A*12"
    const mwv2 = "$WIMWV,142.0,R,25.4,N,A*17"
    const res = parseNmeaSentence(gga);
    console.warn(res);
    return (
        <View style={styles.container}>
            <Text style={styles.connectionString}>{`Connected: ${nmeaConnector.state.connected}`}</Text>
            <Text>Data: {JSON.stringify(nmeaConnector.state.data)}</Text>
        </View>
    );
}

