import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      marginTop:  '14%',
      backgroundColor: '#0B1F34',
      alignItems: 'center',
    },

    gamerImage: {
      width: 309,
      height: 260
    },

    title: {
      color: '#00D4FF',
      fontSize: 30,
      fontWeight: 'bold',
      marginTop: 26,
      fontFamily: "Play_700Bold",
    },

    subTitle: {
      color: '#ED7947',
      fontSize: 20,
      marginTop: 13,
      fontFamily: "Play_400Regular",
    },

    footer: {
      marginTop: '14%',
      alignItems: 'center'
    },

    button: {
      backgroundColor: '#00D4FF',
      flexDirection: 'row',
      borderRadius: 10
    },

    buttonIcon: {
      backgroundColor: '#ED7947',
      justifyContent: 'center',
      alignItems: 'center',
      width: 50,
      borderBottomRightRadius: 10,
      borderTopRightRadius: 10
    },

    buttonText: {
      paddingTop: 15,
      paddingBottom: 15,
      paddingLeft: 50,
      paddingRight: 50,
      fontFamily: "Play_700Bold",
      fontWeight: 'bold',
      fontSize: 18,
      color: '#0B1F34',
    }
})

export default styles;
  