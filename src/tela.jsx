import React, {Component} from "react";
import { StyleSheet, Text, View } from 'react-native';

class Tela extends Component {
    render(){
        return(
            <View style={styles.container}>
                 <Text style={styles.logoTexto}>Logo</Text>

                 <View>
                    <Text style={styles.dadosTexto}>DADOS</Text>
                 </View>
            </View>
        );
    }
}

export default Tela;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',

    },

    logoTexto: {
        color: 'white',
        fontSize: 30,
        fontWeight: 500,
        fontFamily: 'Papyrus',
    },

    dadosTexto: {
        color: 'white',
        fontSize: 30,
        fontWeight: 500,
        fontFamily: 'Papyrus',

    }
})

