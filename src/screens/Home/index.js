import React, { useEffect, useState } from 'react';
import { styles } from './style';

import {
    SafeAreaView,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image,
    ActivityIndicator,
    RefreshControl,
    StatusBar,
    Alert,

} from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import Load from '../../components/Load';
import { DrawerActions, useNavigation } from '@react-navigation/core';
import api from '../../services/api';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import { useIsFocused } from '@react-navigation/native';

export default function Home() {
    const navigation= useNavigation();
    const isFocused = useIsFocused();

    const [dados, setDados] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [usu, setUsu] = useState('');


    async function listarDados() {

        try {
            const user = await AsyncStorage.getItem('@user');
            const res = await api.get(`pam3etim/bd/usuarios/listar-cards.php?user=${user}`);
            setDados(res.data);

        } catch (error) {
            console.log("Erro ao Listar " + error);
        } finally {
            setIsLoading(false);
            setRefreshing(false);

        }
    }

    useEffect(() => {
        listarDados();
    }, [isFocused]);

    const onRefresh = () => {
        setRefreshing(true);
        listarDados();

    };


    return (
        <View style={{ flex: 1 }}>
            <StatusBar barStyle="light-content" />
            <View style={{ flex: 1 }}>
                <View style={styles.header}>
                    <View style={styles.containerHeader}>

                        <TouchableOpacity
                            style={styles.menu}
                            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                        >
                            <MaterialIcons name="menu" size={35} color="black" />
                        </TouchableOpacity>



                    </View>
                </View>


                    <ScrollView
                        style={{ flex: 1 }}
                        showsVerticalScrollIndicator={false}
                        nestedScrollEnabled={true}
                        refreshControl={
                            <RefreshControl
                                refreshing={refreshing}
                                onRefresh={onRefresh}
                            />
                        }
                    >

                    {/*Animais Cadastrados*/}
                    <View style={styles.containerBox}>
                    <View>
                        <View style={styles.box}>

                        <View style={styles.informacoesG}>
                        <View style={styles.informacoes}>
                        <View style={styles.boxUnder}>
                            <Text style={styles.titleInfo}>Nome do Pet:</Text>
                        </View>
                            <Text style={styles.textInfo}>Auau</Text>
                        </View>

                        <View style={styles.informacoes}>
                        <View style={styles.boxUnder}>
                            <Text style={styles.titleInfo}>Tipo de Pet:</Text>
                        </View>
                            <Text style={styles.textInfo}>cathioro</Text>
                        </View>
                        </View>

                        <View style={styles.informacoesG}>
                        <View style={styles.informacoes2}>
                        <View style={styles.boxUnder}>
                            <Text style={styles.titleInfo}>Nome do Pet:</Text>
                        </View>
                            <Text style={styles.textInfo}>Cachorro</Text>
                        </View>

                        <View style={styles.informacoes2}>
                        <View style={styles.boxUnder}>
                            <Text style={styles.titleInfo}>Responsável:</Text>
                        </View>
                            <Text style={styles.textInfo}>Nome</Text>
                        </View>
                        </View>




                         {/*Quantidade ração no alimentador*/}                       
                        <View style={styles.circleProgressView}>
                        <AnimatedCircularProgress
                                size={70}
                                width={7}
                                fill={60}
                                tintColor="green"
                                backgroundColor="#e0e0e0"
                                lineCap={"round"}
                            >
                                {
                                    (fill) => (
                                        <Text style={styles.numberInside}>60%</Text>
                                    )
                                }
                            </AnimatedCircularProgress>

                            <View style={styles.textProgressContainer}>
                                <Text style={styles.textProgressTitle}>Comida disponível no  alimentador</Text>

                                </View>
                        </View>

                        {/*Quantidade ração no pote*/}
                       <View style={styles.circleProgressView}>
                        <AnimatedCircularProgress
                                size={70}
                                width={7}
                                fill={70}
                                tintColor="red"
                                backgroundColor="#e0e0e0"
                                lineCap={"round"}
                            >
                                {
                                    (fill) => (
                                        <Text style={styles.numberInside}>70%</Text>
                                    )
                                }
                            </AnimatedCircularProgress>

                            <View style={styles.textProgressContainer}>
                                <Text style={styles.textProgressTitle}>Comida disponível na bandeja do Pet</Text>

                                </View>
                        </View>

                        </View>


                        
                        </View>
                        </View>

                    {/*   <View style={styles.containerBox}>

                            <TouchableOpacity onPress={() => navigation.navigate("Usuario")}>
                                <View>
                                    <View style={styles.box}>
                                        <MaterialIcons style={styles.iconRegistered} name="pets" size={70} color="#b82d" />
                                        <View style={styles.textos}>
                                            <Text style={styles.rText}>Total de Pets</Text>
                                            <Text style={styles.lenghtText}>{dados.total_usuarios}</Text>
                                        </View>
                                    </View>
                                    <Text style={styles.textFooter}>Pets Cadastrados</Text>
                                </View>
                            </TouchableOpacity>

                        </View> */ } 


                    </ScrollView>
                
            </View>
        </View>






    )
}