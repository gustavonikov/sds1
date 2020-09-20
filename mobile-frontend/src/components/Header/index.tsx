import React from 'react';
import { Image, Text, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

import logoImg from '../../assets/logo.png';


function Header() {
    const navigation = useNavigation();

    function handleOnPress() {
        navigation.navigate('Home');
    }

    return (
        <TouchableWithoutFeedback onPress={handleOnPress}>
            <View style={styles.header}>
            <Image source={logoImg} resizeMode="contain"/>
            <Text style={styles.textLogo1}>Big Game</Text>
            <Text style={styles.textLogo2}>Survey</Text>
            </View>
        </TouchableWithoutFeedback>
        
    );
}

export default Header;
