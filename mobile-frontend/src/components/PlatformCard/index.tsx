import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { FontAwesome5 as Icon } from '@expo/vector-icons';

import { GamePlatform } from './types';

type Props = {
    platform: GamePlatform;
    onChange: (platform: GamePlatform) => void;
    icon: string;
    activePlatform?: GamePlatform;
}

function PlatformCard({ platform, onChange, icon, activePlatform } : Props) {
    const isActive = platform === activePlatform;
    const backgroundColorCard = isActive ? '#fad7c8' : '#fff';
    const cardTextColor = isActive ? '#ed7947' : '#9e9e9e';

    return (
        <RectButton style={[styles.platformCard, {backgroundColor: backgroundColorCard}]} onPress={() => onChange(platform)}>
            <Icon name={icon} size={60} color={cardTextColor} />
            <Text style={[styles.platformCardText, { color: '#9E9E9E'}]}>
                {platform === 'PLAYSTATION' ? 'PS' : platform}
            </Text>
        </RectButton>
    );
}

const styles = StyleSheet.create({
  
    platformCard: {
        height: 150,
        paddingTop: 30,
        paddingBottom: 20,
        width: '31%',
        backgroundColor: '#FFF',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },

    platformCardText: {
        marginTop: 20,
        color: '#9E9E9E',
        fontSize: 24,
        fontFamily: "Play_700Bold",
        textAlign: 'center'
    },
      
})

export default PlatformCard;
