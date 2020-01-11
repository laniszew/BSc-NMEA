/* eslint-disable react-native/no-color-literals */
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import { ListItem, Card } from 'react-native-elements';
import { Packet } from '../../../parser/parser';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eff7fd',
        elevation: 10,
        marginBottom: 15
    },
    label: {
        fontWeight: 'bold',
        fontSize: 16
    },
    cardActive: {
        backgroundColor: '#4388d6',
        color: 'white'
    },
    card: {
        backgroundColor: '#eff7fd'
    },
    frameTextContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderBottomWidth: 1,
        borderBottomColor: '#e5e6e8'
    },
    frameText: {
        flex: 1,
        alignSelf: 'flex-end',
        textAlign: 'right'
    }
});

type Props = {
    frameData: Packet
}

const FrameItem = ({ frameData }: Props) => {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <View>
            <ListItem
                containerStyle={isExpanded ? styles.cardActive : styles.card}
                title={frameData.sentenceId}
                subtitle={frameData.sentenceName}
                bottomDivider
                chevron={isExpanded ? <AntDesign name="down" /> : <AntDesign name="right" />}
                onPress={() => setIsExpanded((prevState) => !prevState)}
            />
            {isExpanded && (
                <Card containerStyle={styles.container}>
                    {Object.keys(frameData).map((frame) => (
                        <View style={styles.frameTextContainer}>
                            <Text style={styles.label}>{frame}</Text>
                            <Text style={styles.frameText}>{frameData[frame]}</Text>
                        </View>
                    ))}
                </Card>
            )}
        </View>
    );
};

export default FrameItem;
