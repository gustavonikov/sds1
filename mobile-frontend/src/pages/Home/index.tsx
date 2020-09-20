import React from 'react';
import { Image, Text, View } from 'react-native';
import { FontAwesome5 as Icon } from '@expo/vector-icons';

import styles from './styles';
import gamerImg from '../../assets/gamer.png';
import { RectButton } from 'react-native-gesture-handler';

import Header from '../../components/Header';
import { useNavigation } from '@react-navigation/native';

function Home() {
    const navigation = useNavigation();

    function handleOnPress() {
       navigation.navigate('CreateRecord');
    }

    return(
        <>
            <Header />
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
