import React from 'react';
import { View, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { IUnitState } from '../../contexts/unitContext/unitTypes';
import FrameItem from './FrameItem/FrameItem';
import { SentenceIdentifiers } from '../../parser/types';
import { IPositionState } from '../../contexts/positionContext/positionTypes';

const list = [
    {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
    },
    {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },
];

type Props = {
    screenProps: {
        unit: IUnitState,
        position: IPositionState
    }
}

export const UnitView = ({ screenProps: { unit, position } }: Props) => (
    <ScrollView>
        <Card title="NMEA Data">
            {Object.keys(unit).map((sentence: SentenceIdentifiers) => (
                <FrameItem
                    key={sentence}
                    frameData={unit[sentence]}
                />
            ))}
            {Object.keys(position).map((sentence: SentenceIdentifiers) => (
                <FrameItem
                    key={sentence}
                    frameData={position[sentence]}
                />
            ))}
        </Card>
    </ScrollView>
);

export default UnitView;
