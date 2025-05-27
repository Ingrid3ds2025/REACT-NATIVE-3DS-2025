import React, {Component} from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';


class Aula03 extends Component {

    constructor(props){
        super(props);
        this.state = {
            backgroundColor: 'pink',
            backgroundColorFundo: 'green',
            imagem: [
                require('../imagens/1.jpg'),
                require('../imagens/2.jpg'),
                require('../imagens/3.jpg'),
            ],

            imagemAtual: 0,
            contador: 0,
            
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

    mudarImagem = () => {
        this.setState(prevState => ({
            imagemAtual: (prevState.imagemAtual + 1) % prevState.imagem.length
        }));
    }

    contadorClique = () => {
        this.setState(prevState => ({
            contador: (prevState.contador + 1)
        }));
    }
    
    render (){
        return(
            <View style={[styles.container, {backgroundColor: this.state.backgroundColorFundo}]}>  

                <Image source={this.state.imagem[this.state.imagemAtual]}
                        style={styles.imagem}
                /> 
                
                <View style={styles.botoes}>
                    <TouchableOpacity style={[styles.botao, {backgroundColor: this.state.backgroundColor}]} onPress={this.changeColor}>
                        <Text style={styles.textoBotao}> mudar a cor do botão</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.botaoFundo, {backgroundColor: this.state.backgroundColorFundo}]} onPress={this.changeColorFundo}>
                        <Text style={styles.textoBotao}> mudar a cor do fundo</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.botao} onPress={() => {
                        this.mudarImagem(),
                        this.contadorClique()
                    }}>
                        <Text style={styles.textoBotao}> mudar a imagem</Text>
                        
                        
                    </TouchableOpacity>
                   
                </View>
                <Text style={styles.textoBotao}> Numero de cliques {this.state.contador}</Text>

                
            </View>
        );
    }
}

export default Aula03;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'start',
        alignItems: 'center',
    },

    botao: {
        backgroundColor: 'blue',
        padding: 15,
        borderRadius: 5,
        width: 80,
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
        width: 80,
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 20
    },

    textoBotao: {
        color: 'white',
        fontWeight: '500',
    },

    imagem: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 200,
        width: 200,
        marginBottom: 50,
        marginTop: 100
    },

    botoes:{
        justifyContent: 'space-between',
        alignItems: 'baseline',
        flexDirection: 'row',
        width: 200,
    }

})
