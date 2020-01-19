/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-restricted-globals */
/* eslint-disable react-native/no-color-literals */
import React, {
    useState, useEffect, useCallback, useMemo
} from 'react';
import MapView, {
    MarkerAnimated,
    LatLng,
    AnimatedRegion,
    Polyline,
    Region
} from 'react-native-maps';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    TouchableOpacity,
    Image
} from 'react-native';
import ShipIcon from '../../../assets/ship2.png';
import LocationIcon from '../../../assets/location-icon.png';
import { IPositionState } from '../../contexts/positionContext/positionTypes';
import { IUnitState } from '../../contexts/unitContext/unitTypes';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    coordinates: {
        flex: 1,
        position: 'absolute',
        bottom: 60,
        left: 10
    },
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    locationButtonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        position: 'absolute',
        bottom: 10,
        backgroundColor: 'rgba(255,255,255,0.7)',
        width: 40,
        height: 40,
        borderRadius: 50,
    },
    locationButton: {
        width: 30,
        height: 30
    }
});

const MapState = {
    latitude: 0,
    longitude: 0,
    routeCoordinates: [],
    coordinate: new AnimatedRegion({
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0
    } as Region)
};

type Props = {
  screenProps: {
    position: IPositionState;
    unit: IUnitState
  }
};

const LATITUDE_DELTA = 0.5;
const LONGITUDE_DELTA = 0.5;

const getLatitude = (latitude: string | null): number => {
    if (!latitude) {
        return 0;
    }
    const numericValue = parseFloat(latitude.split(' ')[0]);
    return latitude.endsWith('S') ? -numericValue : numericValue;
};

const getLongitude = (longitude: string | null): number => {
    if (!longitude) {
        return 0;
    }
    const numericValue = parseFloat(longitude.split(' ')[0]);
    return longitude.endsWith('W') ? -numericValue : numericValue;
}

const Map = ({ screenProps: { position, unit } }: Props) => {
    const [state, setState] = useState(MapState);
    const [isTracking, setIsTracking] = useState(true);
    const coordinates = useMemo(() => ({
        latitude: getLatitude(position.GGA?.latitude),
        longitude: getLongitude(position.GGA?.longitude)
    }), [position.GGA]) as LatLng;

    useEffect(() => {
        const coordinate = {
            latitude: isNaN(coordinates.latitude) ? 0 : coordinates.latitude,
            longitude: isNaN(coordinates.longitude) ? 0 : coordinates.longitude,
            latitudeDelta: 0,
            longitudeDelta: 0
        };
        setState((previousState) => ({
            ...previousState,
            latitude: coordinates.latitude,
            longitude: coordinates.longitude,
            routeCoordinates: coordinate.latitude !== 0 && coordinate.longitude !== 0 ? previousState.routeCoordinates.concat(coordinate) : [],
            coordinate: new AnimatedRegion(coordinate as Region)
        }));

        // state.coordinate.timing(coordinate).start();
    }, [coordinates]);

    const getMapRegion = useCallback(() => ({
        latitude: isNaN(state.latitude) ? 0 : state.latitude,
        longitude: isNaN(state.longitude) ? 0 : state.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
    }), [state.latitude, state.longitude]);

    const positionMap = useCallback(() => (isTracking ? getMapRegion() : null), [getMapRegion, isTracking]);

    return (
        <View style={styles.container}>
            <MapView style={styles.mapStyle} region={positionMap()} onTouchMove={() => setIsTracking(false)}>
                {!isNaN(coordinates.longitude) && <MarkerAnimated coordinate={state.coordinate} icon={ShipIcon} flat rotation={unit.VHW?.degreesTrue || 0} />}
                <Polyline coordinates={state.routeCoordinates} strokeWidth={5} />
            </MapView>
            <View style={styles.coordinates}>
                <Text>{`Unit Latitude: ${position.GGA?.latitude || 0}`}</Text>
                <Text>{`Unit Longitude: ${position.GGA?.longitude || 0}`}</Text>
            </View>
            <TouchableOpacity style={styles.locationButtonContainer} onPress={() => setIsTracking(true)}>
                <Image source={LocationIcon} style={styles.locationButton} />
            </TouchableOpacity>
        </View>
    );
};

export default Map;
