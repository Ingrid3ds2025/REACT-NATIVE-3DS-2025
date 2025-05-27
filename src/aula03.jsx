import React, {Component} from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

class Aula03 extends Component {

    constructor(props){
        super(props);
        this.state = {
            backgroundColor: 'pink',
            backgroundColorFundo: 'green'
        };
    }

    changeColor = () => {
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        this.setState({backgroundColor: randomColor});
    }

    changeColorFundo = () => {
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        this.setState({backgroundColorFundo: randomColor});
    }
    
    render (){
        return(
            <View style={[styles.container, {backgroundColor: this.state.backgroundColorFundo}]}>  

                <TouchableOpacity style={[styles.botao, {backgroundColor: this.state.backgroundColor}]} onPress={this.changeColor}>
                    <Text style={styles.textoBotao}>Toque para mudar a cor do botão</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.botaoFundo, {backgroundColor: this.state.backgroundColorFundo}]} onPress={this.changeColorFundo}>
                    <Text style={styles.textoBotao}>Toque para mudar a cor do fundo</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Aula03;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    botao: {
        backgroundColor: 'blue',
        padding: 15,
        borderRadius: 5,
        width: 150,
        alignItems: 'center',
        borderColor: 'black',
        marginBottom: 40,
        borderWidth: 1,
        borderRadius: 20
    },
    
    botaoFundo:{
        backgroundColor: 'green',
        borderColor: 'black',
        padding: 15,
        borderRadius: 5,
        width: 150,
        alignItems: 'center',
        borderWidth: 1,
    },

    textoBotao: {
        color: 'white',
        fontWeight: '500'
    }

})
