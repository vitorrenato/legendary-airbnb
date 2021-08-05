import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';

export default function Home() {

    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            
            <Pressable style={styles.searchBar} onPress={() => navigation.navigate('DestinationSearch')}>
                <Ionicons size={24} name='search' color='#f15454' />
                <Text style={styles.searchText}>
                    Para onde você vai?
                </Text>
            </Pressable>

            <ImageBackground 
                style={styles.imageBg} 
                source={{uri: 'https://www.nawpic.com/media/2020/mountain-nawpic-5.jpg'}}
            >
                <Text style={styles.imageTitle}>Está em dúvida pra onde ir?</Text>
                <Text style={styles.imageSubtitle}>Tudo bem! Tenho flexibilidade.</Text>
                <Pressable style={styles.imageButton}>
                    <Text style={styles.buttonText}>Saiba mais</Text>
                </Pressable>
            </ImageBackground>

            <Text style={styles.title}>Explore destinos perto de você</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    searchBar: {
        position: 'absolute', 
        flexDirection: 'row',
        top: 40, 
        width: 370,
        height: 40,
        backgroundColor: 'white', 
        justifyContent: 'center', 
        alignItems: 'center', 
        paddingHorizontal: 10, 
        borderRadius: 20, 
        marginLeft: 20, 
        zIndex: 100,
    },
    searchText: {
        marginLeft: 10,
    },
    imageBg: {
        height: 500, 
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    imageTitle: {
        color: 'white', 
        fontSize: 34,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    imageSubtitle: {
        color: 'white', 
        fontSize: 18, 
        marginTop: 10,
    },
    imageButton: {
        width: 200, 
        backgroundColor: 'black', 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 5,
        marginTop: 30,
    },
    buttonText: {
        color: 'white', 
        fontWeight: 'bold', 
        paddingVertical: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
        marginHorizontal: 20,
    }
})