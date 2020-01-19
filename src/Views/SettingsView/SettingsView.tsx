/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
import React, { useState, Dispatch, useRef } from 'react';
import {
    View, Text, StyleSheet, TextInput, Button
} from 'react-native';
import { NmeaConnectorActions } from '../../contexts/nmeaConnectorContext/nmeaConnectorActions';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#a7c2de'
    },
    settingsContainer: {
        flex: 1,
        width: '90%',
        borderWidth: 1,
        maxHeight: '90%',
        padding: 20,
        elevation: 20,
        backgroundColor: 'white',
        borderRadius: 50
    },
    connectionString: {
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center',
        paddingBottom: 15,
    },
    urlContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 0.5,
        padding: 10
    },
    label: {
        alignSelf: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        paddingBottom: 30
    },
    input: {
        borderWidth: 1,
        fontSize: 16,
        padding: 5
    },
    footerButtonsContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 20
    }
});

type Props = {
    screenProps: {
        url: string,
        isConnected: boolean,
        connectorDispatch: Dispatch<NmeaConnectorActions>
    }
}


export const SettingsView = ({ screenProps: { url, isConnected, connectorDispatch } }: Props) => {
    const [wsUrl, setWsUrl] = useState(url);
    const [isUrlChanging, changeUrl] = useState(false);
    const input = useRef(null);

    const handleChangeUrl = () => {
        changeUrl(true);
        setTimeout(() => {
            input.current.focus();
        }, 50);
    };

    const handleAccept = () => {
        connectorDispatch(NmeaConnectorActions.setUrl(wsUrl));
        changeUrl(false);
    };

    const handleCancel = () => {
        setWsUrl(url);
        changeUrl(false);
    };

    return (
        <View style={styles.container}>
            <View style={styles.settingsContainer}>
                <Text style={styles.label}>Websocket server</Text>
                <Text style={{ ...styles.connectionString, color: isConnected ? 'green' : 'red' }}>{`${isConnected ? 'Connected' : 'Disconnected'}`}</Text>
                <View style={styles.urlContainer}>
                    <TextInput
                        style={{
                            ...styles.input,
                            backgroundColor: isUrlChanging ? 'white' : '#DFDFDF',
                            color: isUrlChanging ? 'black' : '#BDBDBD'
                        }}
                        ref={input}
                        value={wsUrl}
                        onChangeText={(text) => setWsUrl(text)}
                        editable={isUrlChanging}
                        maxLength={25}
                    />
                    <Button onPress={handleChangeUrl} title="Change url" />
                </View>
                <View style={styles.footerButtonsContainer}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Button title="Cancel" onPress={handleCancel} />
                        <Button title="Accept" onPress={handleAccept} disabled={!isUrlChanging} />
                    </View>
                </View>
            </View>
        </View>
    );
};

export default SettingsView;
