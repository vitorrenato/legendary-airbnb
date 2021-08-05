import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Guests() {
    
    const navigation = useNavigation();

    const [ adults, setAdults ] = useState(0);
    const [ children, setChildren ] = useState(0);
    const [ infants, setInfants ] = useState(0);

    return(
        <View style={styles.container}>
            
            <View style={styles.row}>
                <View style={styles.text}>
                    <Text style={styles.textTitle}>Adultos</Text>
                    <Text style={styles.textTitle2}>De 13 anos pra cima</Text>
                </View>
                <Pressable onPress={() => setAdults(Math.max(0, adults - 1))}>
                    <Ionicons size={40} name='remove-circle-outline' />
                </Pressable>
                <Text style={styles.number}>{adults}</Text>
                <Pressable onPress={() => setAdults(adults + 1)}>
                    <Ionicons size={40} name='add-circle-outline' />
                </Pressable>
            </View>

            <View style={styles.row}>
                <View style={styles.text}>
                    <Text style={styles.textTitle}>Crianças</Text>
                    <Text style={styles.textTitle2}>Entre 2 e 12 anos</Text>
                </View>
                <Pressable onPress={() => setChildren(Math.max(0, children - 1))}>
                    <Ionicons size={40} name='remove-circle-outline' />
                </Pressable>    
                <Text style={styles.number}>{children}</Text>
                <Pressable onPress={() => setChildren(children + 1)}>
                    <Ionicons size={40} name='add-circle-outline' />
                </Pressable>
            </View>

            <View style={styles.row}>
                <View style={styles.text}>
                    <Text style={styles.textTitle}>Bebês</Text>
                    <Text style={styles.textTitle2}>Menos de 2 anos</Text>
                </View>
                <Pressable onPress={() => setInfants(Math.max(0, infants - 1))}>
                    <Ionicons size={40} name='remove-circle-outline' />
                </Pressable>
                <Text style={styles.number}>{infants}</Text>
                <Pressable onPress={() => setInfants(infants + 1)}>
                    <Ionicons size={40} name='add-circle-outline' />
                </Pressable>
            </View>

            <Pressable style={styles.button} onPress={() => navigation.navigate('Home', {
                screen: 'Explore',
                params: {
                    screen: 'SearchResults',
                }
            })}>
                <Text style={styles.buttonText}>Pesquisar</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
    },
    text: {
        flex: 1,
    },
    textTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    textTitle2: {
        color: 'grey',
    },
    number: {
        marginHorizontal: 20,
    },
    button: {
        backgroundColor: '#f15454',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    }
});