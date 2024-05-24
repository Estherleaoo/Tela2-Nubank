import React from 'react';
import { StyleSheet, View, Image, Text } from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


const ArieTela2Screen = () =>{
    

    return(
        <View style={styles.Tela2ScreenContainer}>
            <View style={styles.Header}>
                <View style={styles.HeaderContainer}>
                    <View style={styles.Usuario}>
                        <Image 
                            style={{width: 50, height: 50}}
                            source={require('../../assets/images/usuario1.png')}
                        />
                    </View>

                    <View style={styles.Outros}>
                        <View style={styles.Visualizacao}>
                            <Image 
                                style={{width: 30, height: 30}}
                                source={require('../../assets/images/visualizar.png')}
                            />
                        </View>
                        
                        <View style={styles.Visualizacao}>
                            <AntDesign name="questioncircleo" size={24} color="white" />
                        </View>

                        <View style={styles.Visualizacao}>
                            <MaterialCommunityIcons name="email-plus-outline" size={24} color="white" />
                        </View>
                    </View>

                </View>

            </View>

            <View style={styles.Content}>
                <View style={styles.Content1}>
                    <Text style={styles.Subtitulo}>Acompanhe seu dinheiro</Text>
                    <View style={styles.Caixa}>
                        <View style={styles.Itens}>
                            
                            <View style={styles.Logo}>
                                <Image 
                                    style={{width: 25, height: 25}}
                                    source={require('../../assets/images/dolar.png')}
                                />
                            </View>

                            <Text style={styles.text1}>Caixinhas</Text>

                            <Text style={styles.text2}>R$ 100,00</Text>
                        </View>

                    </View>

                    <View style={styles.Caixa}>
                        <View style={styles.Itens}>
                            <View style={styles.Logo}>
                                <Ionicons name="cellular-sharp" size={20} color="black" />
                            </View>

                            <Text style={styles.text1}> Investimentos</Text>

                            <Text style={styles.text2}>R$ 317,94</Text>
                        </View>
                    
                    </View>

                    <View style={styles.Caixa}>
                        <View style={styles.Itens}>
                            <View style={styles.Logo}>
                                <Image 
                                    style={{width: 25, height: 25}}
                                    source={require('../../assets/images/cristal.png')}
                                />
                            </View>

                            <Text style={styles.text1}>Cripto</Text>

                            <Text style={styles.text2}>R$ 758,90</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.divider} />

                <View style={styles.Content2}>
                    <Text style={styles.Subtitulo}>Seguros</Text>
                    <View style={styles.Caixa}>
                        <View style={styles.Itens}>
                            <View style={styles.Logo}>
                                <AntDesign name="hearto" size={22} color="black" />
                                </View>

                            <Text style={styles.text1}>Seguro de vida</Text>

                        </View>
                    </View>

                    <View style={styles.Caixa}>
                        <View style={styles.Itens}>
                            <View style={styles.Logo}>
                                <MaterialCommunityIcons name="cellphone-dock" size={24} color="black" />
                            </View>

                            <Text style={styles.text1}>Seguro de celular</Text>

                        </View>
                    </View>

                </View>
                
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    Tela2ScreenContainer: {
        width: "100%",
        height: "100%",
        backgroundColor: "white"
    },

    Header: {
        justifyContent: 'flex-end',
        width: "100%",
        height: "15%",
        backgroundColor: '#810AD0'
    },

    HeaderContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 15,
        width: "100%",
        height: "50%"
    },

    Usuario:{
        marginLeft: 20
    },

    Outros:{
        width: 200,
        display: "flex",
        marginLeft: 155,
        flexDirection: "row"
    },

    Visualizacao:{
        marginLeft: 30,
        justifyContent: "center"
    },

    Content:{
        width: "100%",
        height: "100%"
    },

    Content1:{
        width: "100%",
        height: "38%",
        marginBottom: 0
    },

    Content2:{
        width: "100%",
        height: "40%"
    }, 

    Subtitulo:{
        fontSize:20, 
        color:'black', 
        marginTop: 20, 
        marginLeft: 15
    },

    Caixa:{
        width: 380,
        height: 70,
        borderRadius: 15,
        marginTop: 20,
        flexDirection: "row",
        padding: 10,
        alignSelf: "center",
        backgroundColor: '#F0F1F5'
    },

    Itens:{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row"
    },

    Logo:{
        justifyContent: "center",
        marginLeft: 3
    },

    text1:{
        fontSize: 14,
        alignItems: "flex-start",
        textAlign: "justify", 
        width: 150, 
        height: 30,
        marginTop: 15,
        marginLeft: 15,
        flexDirection: "row"
    },

    text2:{
        fontSize: 14,
        marginLeft: 90,
        textAlign: "justify", 
        width: 80, 
        height: 30,
        marginTop: 10,
        display: "flex"
    },

    divider: {
        width: '100%',  
        height: 1,      
        backgroundColor: '#F0F1F5',  
        marginVertical: 2, 
    },

})

export default ArieTela2Screen