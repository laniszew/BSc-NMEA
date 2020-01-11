/* eslint-disable  */
import React from 'react';
import useDeepCompareEffect from 'use-deep-compare-effect'
import { View, StyleSheet, Dimensions } from 'react-native';
import { useNmeaConnector } from '../contexts/nmeaConnectorContext/nmeaConnectorContext';
import { parseNmeaSentence } from '../parser/parser';
import { usePosition } from '../contexts/positionContext/positionContext';
import { PositionActions } from '../contexts/positionContext/positionActions';
import { isPositionPacket } from '../contexts/positionContext/utils';
import { useUnit } from '../contexts/unitContext/unitContext';
import { isUnitPacket } from '../contexts/unitContext/utils';
import { UnitActions } from '../contexts/unitContext/unitActions';
import Navigator from '../Navigator/Navigator';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    screensContainer: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }
});

export function MainView() {
    const nmeaConnector = useNmeaConnector();
    const position = usePosition();
    const unit = useUnit();
    const gga = "$GPGGA,093053.563,3510.75,S,13828.03,E,1,4,1.6,2.0,M,,,,*29\r\n";
    const ggl = "$GPGLL,3510.75,S,13828.02,E,211844.432,A*21";
    const gsa = "$GPGSA,A,3,8,11,15,22,,,,,,,,,2.3,2.2,1.5*0B";
    const mwv = "$WIMWV,216.4,T,35.0,N,A*12"
    const mwv2 = "$WIMWV,142.0,R,25.4,N,A*17"
    const mwv1 = "$WIMWV,142.0,R,25.4,N,A*17"
    const mwd = "$WIMWD,216.4,T,216.4,M,35.0,N,18.0,M*55"
    const rmc = "$GPRMC,123519,A,4807.038,N,01131.000,E,022.4,084.4,230394,003.1,W*6A"


    useDeepCompareEffect(() => {
        if (nmeaConnector.state.connected && Object.keys(nmeaConnector.state.data).length > 0) {
            const frames = nmeaConnector.state.data.split(/\r?\n/);
            frames.map((frame: string) => {
                try {
                    const response = parseNmeaSentence(frame);
                    if (isPositionPacket(response)) {
                        position.dispatch(PositionActions.setFrameData({ frameType: response.sentenceId, frameData: response }))
                    }
                    else if(isUnitPacket(response)) {
                        unit.dispatch(UnitActions.setFrameData({ frameType: response.sentenceId, frameData: response }))
                    }
                }
                catch(error) {

                }
            })
        }
    }, [nmeaConnector.state])

    return (
        <View style={styles.container}>
            <View style={styles.screensContainer}>
                <Navigator screenProps={{
                     position: position.state,
                     unit: unit.state,
                     isConnected: nmeaConnector.state.connected,
                     url: nmeaConnector.state.url,
                     connectorDispatch: nmeaConnector.dispatch
                     }} />
            </View>
        </View>
    );
}

export default MainView;
