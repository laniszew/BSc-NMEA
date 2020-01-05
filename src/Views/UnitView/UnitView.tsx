import React from 'react';
import { View, Text } from 'react-native';
import { IUnitState } from '../../contexts/unitContext/unitTypes';


type Props = {
    screenProps: {
        unit: IUnitState
    }
}

export const UnitView = ({ screenProps: { unit } }) => {
    return (
        <View>
            {Object.keys(unit).map((key) => (
                <Text>{JSON.stringify(unit[key])}</Text>
            ))}
        </View>
    );
};

export default UnitView;
