import React from 'react';
import { Image, Text, View } from 'react-native';

import styles from './styles';
import logoImg from '../../assets/logo.png';

function Header() {
    return (
        <View style={styles.header}>
            <Image source={logoImg} resizeMode="contain"/>
            <Text style={styles.textLogo1}>Big Game</Text>
            <Text style={styles.textLogo2}>Survey</Text>
        </View>


    );
}

export default Header;
