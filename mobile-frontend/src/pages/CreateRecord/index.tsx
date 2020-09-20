import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Picker from 'react-native-picker-select';

import { FontAwesome5 as Icon } from '@expo/vector-icons';
import axios from 'axios';

import styles from './styles';

import Header from '../../components/Header';
import PlatformCard from '../../components/PlatformCard';
import { Game, GamePlatform } from '../../components/PlatformCard/types';
import BASE_URL from '../../config';

const pickerPlaceHolder = {
    label: 'Selecione o game',
    value: '',
}

function CreateRecord() {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [platform, setPlatform] = useState<GamePlatform>();
    const [pickedGame, setPickedGame] = useState('');
    const [allGames, setAllGames] = useState<Game[]>([]);
    const [filteredGames, setFilteredGames] = useState<Game[]>([]);

    function handleChangePlatform(selectedPlatform: GamePlatform) {
        setPlatform(selectedPlatform);

        const gamesByPlatform = allGames.filter((game) => game.platform === selectedPlatform)
        
        setFilteredGames(gamesByPlatform);
    }

    function handleSubmit () {
        const payload = { name, age , gameId: pickedGame }

        try {
            axios.post(`${BASE_URL}/records`, payload)
            Alert.alert('Seu voto foi salvo com sucesso!')
        } catch {
            Alert.alert('Não foi possível salvar o seu voto!')
        }

        setName('');
        setAge('');
        setPickedGame('');
        setPlatform(undefined);
    }

    function mapSelectValues (games: Game[]) {
        return games.map((game) => ({
            ...game,
            label: game.title,
            value: game.id,
        }));
    }

    useEffect(() => {
        axios.get(`${BASE_URL}/games`)
            .then((response) => {
                const selectValues = mapSelectValues(response.data)
                setAllGames(selectValues);
            })
            .catch(() => Alert.alert('Não foi possível obter os jogos! Tente novamente mais tarde'));
               
    },[]);

    return (
        <>
            <Header />
            <View style={styles.container}>
                <TextInput 
                    style={styles.inputText} 
                    placeholder="Nome"
                    onChangeText={(text) => setName(text)} 
                    value={name}
                />
                <TextInput 
                    style={styles.inputText} 
                    placeholder="Idade" 
                    keyboardType="numeric" 
                    onChangeText={(text) => setAge(text)} 
                    value={age}
                />
                <View style={styles.platformContainer}>
                    <PlatformCard platform="PC" icon="desktop" activePlatform={platform} onChange={handleChangePlatform} />
                    <PlatformCard platform="XBOX" icon="xbox" activePlatform={platform} onChange={handleChangePlatform} />
                    <PlatformCard platform="PLAYSTATION" icon="playstation" activePlatform={platform} onChange={handleChangePlatform} />
                </View>
                <Picker
                    onValueChange={(value) => setPickedGame(value)} 
                    placeholder={pickerPlaceHolder} 
                    value={pickedGame}
                    items={filteredGames}
                    style={pickerSelectStyles}
                    Icon={() => <Icon name="chevron-down" color="#9e9e9e" size={25} />}
                />
                <View style={styles.footer}>
                    <RectButton style={styles.button} onPress={handleSubmit}>
                        <Text style={styles.buttonText}>SALVAR</Text>
                    </RectButton>
                </View>
                
            </View>
        </>
        
    );
}

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 20,
        backgroundColor: '#FFF',
        borderRadius: 10,
        color: '#ED7947',
        paddingRight: 30,
        fontFamily: "Play_700Bold",
        height: 50
      },

      inputAndroid: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 20,
        backgroundColor: '#FFF',
        borderRadius: 10,
        color: '#ED7947',
        paddingRight: 30,
        fontFamily: "Play_700Bold",
        height: 50
      },
  
      placeholder: {
        color: '#9E9E9E',
        fontSize: 16,
        fontFamily: "Play_700Bold",
      },
      
      iconContainer: {
        top: 10,
        right: 12,
      }
})

export default CreateRecord;
