import React from 'react';
import { Alert, Image, Text, View } from 'react-native';
import { FontAwesome5 as Icon } from '@expo/vector-icons';

import styles from './styles';
import gamerImg from '../../assets/gamer.png';
import { RectButton } from 'react-native-gesture-handler';

function Home() {

    function handleOnPress() {
        Alert.alert('Obrigado por votar');
    }

    return(
        <>
            <View style={styles.container}>
                <Image style={styles.gamerImage} source={gamerImg} resizeMode="contain" />
                <Text style={styles.title}>Vote agora!</Text>
                <Text style={styles.subTitle}>Nos diga qual é o seu jogo favorito!</Text>
            </View>
            <View style={styles.footer}>
                <RectButton style={styles.button} onPress={handleOnPress} >
                    <Text style={styles.buttonText}>
                        COLETAR DADOS
                    </Text>
                    <View style={styles.buttonIcon}>
                        <Text>
                            <Icon name="chevron-right" color='#FFF' size={25} />
                        </Text>
                    </View>
                </RectButton>
            </View>
        </>
    );
}

export default Home;
